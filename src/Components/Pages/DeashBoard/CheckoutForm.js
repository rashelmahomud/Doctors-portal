import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CheckoutForm = ({ apoinment }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [procacing, setProcacing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, price, treatment, patient, patientName } = apoinment;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {

            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                }

            });

    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({

            type: 'card',
            card
        });


        setCardError(error?.message || '');
        setSuccess('');
        setProcacing(true);

        //confirm  payment card

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcacing(false);
        }
        else {
            setCardError('');
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);
            setSuccess('Congratulations ! Your payments is completed');


            // payment 
            const payment = {
                appointment: _id,
                name: patientName,
                problems: treatment,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/booking/${_id}`, {

                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`

                },
                body: JSON.stringify(payment)


            }).then(res => res.json())
                .then(data => {
                    setProcacing(false);
                    console.log(data);
                })

        }


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary mt-5 text-white ' type="submit" disabled={!stripe || !clientSecret}>
                    Send Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p> {success}</p>
                    <p>Your Transaction Id: <span className=' text-orange-500 font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0gQEDIV23r720zVb2664zCzLs7pDsomY6RCPFitr0nePAQjCZf6YHaWIaNwIZ7jJN5DJhS0cYJcqkPriJQgNnr002JDW73GU');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: apoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {/* <h1>plases play for: {id}</h1> */}

            <div class="card w-96 bg-base-100 shadow-xl justify-center">
                <div class="card-body">
                    <h3>Hello Dear- : <span className='text-secondary font-bold uppercase'>{apoinment.patientName}</span></h3>
                    <h2 class="card-title">{apoinment.treatment}</h2>
                    <p>Your apoinment <span>{apoinment.date} at {apoinment.slot}</span></p>
                    <p>Price: ${apoinment.price}</p>
                    {/* <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>

            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;
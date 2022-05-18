import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({ date, titment, setTitment,refetch }) => {
    const { _id, name, slots,price } = titment;
    const [user, loading, error] = useAuthState(auth);

    const formattedDate = format(date, 'PP');
    const handelSubmite = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            number: event.target.number.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    alert(`appoinment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    alert(`alredy have and appoinment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setTitment(null);
            })
    }

    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">Booking for: {name}!</h3>

                    <form onSubmit={handelSubmite}>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs my-3 required" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                //ai khane index dawar mane hole id nai tai ababe index diya error handel korte hobe.
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs required" />
                        <input type="Number" name='number' placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-3 required" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs my-3 required" />
                        <input type='submit' name='submit' value='submit' placeholder="Email" className="input btn btn-secondary input-bordered w-full max-w-xs required" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;
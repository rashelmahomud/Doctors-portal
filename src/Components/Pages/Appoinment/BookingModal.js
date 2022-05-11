import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, titment, setTitment }) => {
    const { _id, name, slots } = titment;

    const handelSubmite = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id,slot,name);
        setTitment();
    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="Booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-secondary">Booking for: {name}!</h3>

                    <form onSubmit={handelSubmite}>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs my-3 required" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                        
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs required" />
                        <input type="Number" name='number' placeholder="Phone Number" class="input input-bordered w-full max-w-xs my-3 required" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs my-3 required" />
                        <input type='submit' name='submit' value='submit' placeholder="Email" class="input btn btn-secondary input-bordered w-full max-w-xs required" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;
import React from 'react';

const Services = ({ service,setTitment }) => {

    const { name, slots,price } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="font-bold text-2xl text-secondary text-center">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-400 font-bold'>All Booked Today</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availabe </p>
                <p><small className='font-bold'>price: ${price}</small></p>
                <div className="card-actions justify-center">
                     <label
                      disabled={slots.length === 0}
                      onClick={ () => setTitment(service)}
                      for="Booking-modal" className="btn btn-primary text-white font-bold uppercase">Book Appoinment</label>
                </div>

            </div>
        </div>
    );
};

export default Services;
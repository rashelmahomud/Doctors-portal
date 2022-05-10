import React from 'react';

const Services = ({ service }) => {

    const { name, slots } = service;

    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="font-bold text-2xl text-secondary text-center">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-400 font-bold'>All Booked Today</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availabe </p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary text-white font-bold uppercase">Book Appoinment</button>
                </div>

            </div>
        </div>
    );
};

export default Services;
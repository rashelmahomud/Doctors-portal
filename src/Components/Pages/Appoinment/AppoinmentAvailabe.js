import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from './Services';

const AppoinmentAvailabe = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='px-12'> 
            <p className='font-bold text-3xl px-12 text-center text-secondary mb-10' >Date Selected {format(date, 'PP')}.</p>;


            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mb-20'>

                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                    > </Services>)
                }

            </div>

        </div>
    );
};

export default AppoinmentAvailabe;
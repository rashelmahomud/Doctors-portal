import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Services from './Services';
import Loading from '../../Shared/Loading/Loading';

const AppoinmentAvailabe = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [titment, setTitment] = useState(null);

const formattedDate = format(date, 'PP');
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    const { data: services, isLoading,refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }
            

    return (
        <div className='px-12'> 
            <p className='font-bold text-3xl px-12 text-center text-secondary mb-10' >Date Selected {format(date, 'PP')}.</p>;


            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mb-20'>

                {
                    services.map(service => <Services
                        key={service._id}
                        setTitment={setTitment}
                        service={service}
                    > </Services>)
                }

            </div>
            {titment && <BookingModal refetch={refetch} setTitment={setTitment} date={date} titment={titment}></BookingModal>}

        </div>
    );
};

export default AppoinmentAvailabe;
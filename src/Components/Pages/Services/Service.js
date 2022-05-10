import React from 'react';
import ServiceInfo from '../../Pages/Services/ServiceInfo/ServiceInfo';
import cavity from '../../../assets/images/cavity.png';
import flouride from '../../../assets/images/fluoride.png';
import whiteining from '../../../assets/images/whitening.png';


const Service = () => {
    const servces = [
        {
            _id : 1,
            name: 'Fluoride Treatment',
            img: cavity,
            dec: 'Flouride Treatment is very nice and excelent any very easyly work our and respect'
        },
        {
            _id : 2,
            name: 'Cavity Filling',
            img: flouride,
            dec: 'Flouride Treatment is very nice and excelent any very easyly work our and respect'
        },
        {
            _id : 3,
            name: 'Teeth Whitening',
            img: whiteining,
            dec: 'Flouride Treatment is very nice and excelent any very easyly work our and respect'
        }
    ];
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h1 className='text-primary text-xl font-bold'>OUR SERVICES</h1>
                <h1 className='text-5xl font-bold'>Services We Provide</h1>
            </div>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 my-10'>
                
            {
                servces.map(service => <ServiceInfo 
                    key={service._id}
                    service={service}
                ></ServiceInfo> )
            }

            </div>


        </div>
    );
};

export default Service;
import React from 'react';
import imgCotations from '../../../assets/images/s.png';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';


const Testimonial = () => {
    const testis = [
        {
            _id: 1,
            name:'Winson Herry',
            locations: 'California',
            
        },
        {
            _id: 2,
            name:'Winson Herry',
            locations: 'California',
            
        },
        {
            _id: 3,
            name:'Winson Herry',
            locations: 'California',
            
        }
    ];
    return (
        <section>
            <div className='flex justify-between'>
                <div className='mt-10'>
                    <h1 className='text-primary font-bold text text-3xl'>Testimonial</h1>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>

                <div>
                    <img src={ imgCotations} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    testis.map(testi => <TestimonialInfo
                        key={testi._id}
                        testi={testi}
                    ></TestimonialInfo>)
                }
                
            </div>
        </section>
    );
};

export default Testimonial;
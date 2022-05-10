import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import chair from '../../../assets/images/chair.png';
import chairBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <section>

            <div 
            style={{
                backgroundPosition:'cover',
                background:`url(${chairBg})`
            }}

             class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='px-5 lg:px-20'>
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='px-5 lg:px-20 '>

                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}

                        />;
                        <p className='font-bold'>Date Selected {format(date, 'PP')}.</p>;

                    </div>
                </div>
            </div>






            <Footer></Footer>
        </section>
    );
};

export default Appoinment;
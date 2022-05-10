import React from 'react';
import contactBg from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section className='my-36'
            style={{
                background: `url(${contactBg})`
            }}
        >
            <div className='p-10'>
                <div className='grid justify-items-center mb-5'>
                    <h1 className='text-primary text-2xl font-bold'>contact Us</h1>
                    <h4 className='text-5xl font-bold'>Say Conected with us</h4>
                </div>
                <div className='grid justify-items-center'>
                    <input className='w-80 rounded-lg p-3' type="text" placeholder='Email Address' /> <br />
                    <input className='w-80 rounded-lg p-3' type="text" placeholder='subject' /> <br />
                    <textarea className='w-80 rounded-lg p-3' name="" id="" cols="40" rows="8" placeholder='your massage'></textarea>
                    <input className='btn btn-primary mt-5 text-white' type="submit" value="submite" />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
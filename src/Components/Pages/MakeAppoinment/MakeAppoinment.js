import React from 'react';
import img from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppoinment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className='flex my-40'>
            <div className='flex-1'>
                <img className='mt-[-160px] hidden lg:block ' src={img} alt="" />
            </div>
            <div className='flex-1 my-10 lg:my-20 mx-5'>
                <h1 className='text-primary font-bold text-2xl my-5'>Appoinment</h1>
                <h2 className='text-5xl text-white'>Make an Appoinment Today</h2>
                <p className='text-2xl text-white my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div class="card-actions">
                    <button class="btn btn-primary">GET STARTED</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;
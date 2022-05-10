import React from 'react';
import Health from '../../Pages/Health/Health';
import Info from '../../Pages/Info/Info';
import MakeAppoinment from '../../Pages/MakeAppoinment/MakeAppoinment';
import Service from '../../Pages/Services/Service';
import Testimonial from '../../Pages/Testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Health></Health>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
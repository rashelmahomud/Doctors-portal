import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5'>
            <InfoCard bgClass="bg-primary" CartTitle="Opening Hours" Dec="our Dostors anytime service delivery" img={clock}></InfoCard>
            <InfoCard bgClass="bg-accent" CartTitle="Visit Your Locations" Dec="Our doctors proltal is a very nice and valuable" img={marker}></InfoCard>
            <InfoCard bgClass="bg-secondary" CartTitle="Contact Us Now" Dec="Your any needs for Contact me" img={phone}></InfoCard>
          
        </div>
    );
};

export default info;
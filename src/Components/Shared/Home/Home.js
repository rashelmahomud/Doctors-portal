import React from 'react';
import Info from '../../Pages/Info/Info';
import Service from '../../Pages/Services/Service';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
        </div>
    );
};

export default Home;
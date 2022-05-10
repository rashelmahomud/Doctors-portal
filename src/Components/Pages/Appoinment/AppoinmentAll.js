import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appoinment from './Appoinment';
import AppoinmentAvailabe from './AppoinmentAvailabe';

const AppoinmentAll = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>

            <Appoinment date={date} setDate={setDate}></Appoinment>
            <AppoinmentAvailabe date={date} setDate={setDate}></AppoinmentAvailabe>
            <Footer></Footer>
        </div>
    );
};

export default AppoinmentAll;
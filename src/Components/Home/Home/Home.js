import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div >
            <div className='px-10'>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            </div>
            <Appointment/>
        </div>
    );
};

export default Home;
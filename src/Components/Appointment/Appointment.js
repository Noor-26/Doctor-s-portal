import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Avaliableappointment from './AvaliableAppointment/Avaliableappointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected} />
            <Avaliableappointment selected={selected}/>
        </div>
    );
};

export default Appointment;
import React, { useState } from 'react';
import chairImg from '../../../images/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


export default function AppointmentBanner({selected,setSelected}) {
   

  return (
    <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col  lg:flex-row-reverse">
          <img src={chairImg} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
          <DayPicker 
                mode="single"
                selected={selected}
                onSelect={setSelected}/>
                 
          </div>
        </div>
      </div>
  )
}

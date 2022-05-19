import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import Service from './Service/Service';
import Bookingmodal from '../Bookingmodal';

export default function Avaliableappointment({selected}) {
  const [services, setservice] = useState([])
  const [treatment,setTreatment] = useState({})
  
  useEffect(() => {
   fetch('services.json')
   .then(res => res.json())
   .then(data => setservice(data))

  }, [])
  
  return (
      <div>
        <p className='text-center text-secondary font-bold'>Available Appointments on  {format(selected, 'PP')}</p>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-10'>
          {
            services.map(service => <Service service={service} setTreatment={setTreatment} key={service._id}/>)
          }
        </div>
        {treatment && <Bookingmodal treatment={treatment}  setTreatment={setTreatment} selected={selected}/>}
    </div>
  )
}

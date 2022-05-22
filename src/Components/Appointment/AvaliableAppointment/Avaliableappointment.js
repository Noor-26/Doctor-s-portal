import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import Service from './Service/Service';
import Bookingmodal from '../Bookingmodal';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query'

export default function Avaliableappointment({selected}) {
  // const [services, setservice] = useState([])
  const [treatment,setTreatment] = useState({})
  const formateDate = format(selected,'PP')

  const {data:services,isLoading,refetch} = useQuery('services',() => fetch(`http://localhost:5000/avaliable?date=${formateDate}`,).then(res => res.json()))
  
  if(isLoading){
    return<Loading/>
  }
  return (
      <div>
        <p className='text-center text-secondary font-bold'>Available Appointments on  {format(selected, 'PP')}</p>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-10'>
          {
            services.map(service => <Service service={service} setTreatment={setTreatment} key={service._id}  />)
          }
        </div>
        {treatment && <Bookingmodal treatment={treatment}  setTreatment={setTreatment} selected={selected} refetch={refetch}/>}
    </div>
  )
}

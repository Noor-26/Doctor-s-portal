import React, { useEffect, useState } from 'react'
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';


function Myappointment() {
    const [appointments, setAppointments] = useState([])
    const [user,loading] = useAuthState(auth)
    
    useEffect(() => {
      if(user){
        fetch(`http://localhost:5000/booking?patient=${user?.email}`)
        .then(res => res.json())
        .then(data => setAppointments(data))
      }
    }, [user])
    if(loading){
        return <Loading/>
    }
  return (
    <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
     {
         appointments.map((appointment,index) =>  <tr>
         <th>{index+1}</th>
         <td>{appointment.patientName}</td>
         <td>{appointment.date}</td>
         <td>{appointment.slot}</td>
         <td>{appointment.treatment}</td>
       </tr>)
     }
     
     
    </tbody>
  </table>
</div>
  )
}

export default Myappointment
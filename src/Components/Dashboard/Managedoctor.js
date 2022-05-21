import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Deletemodal from '../Shared/deleteModal/Deletemodal'
import Loading from '../Shared/Loading/Loading'
import Doctors from './Doctors'

function Managedoctor() {
   const [deleteDoctor,setDeleteDoctor] = useState(null)
    const {data:doctors,isLoading,refetch} = useQuery('doctors',() => fetch('http://localhost:5000/doctor',{
        headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading/>
    }
  return (
    <div>
        <p className='text-2xl my-3'> Manage doctors </p>

        <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Avater</th>
        <th>Name</th>
        <th>Speciality</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
         doctors.map((doctor,index) => <Doctors doctor={doctor} key={doctor._id} index={index} refetch={refetch} setDeleteDoctor={setDeleteDoctor}/>)
     }
     
    
    </tbody>
  </table>
</div>
{
    deleteDoctor && <Deletemodal deleteDoctor={deleteDoctor} refetch={refetch} setDeleteDoctor={setDeleteDoctor}/>
}
    </div>
  )
}

export default Managedoctor
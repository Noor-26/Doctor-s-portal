import { format } from 'date-fns'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading/Loading'

export default function Bookingmodal({treatment,selected,setTreatment,refetch}) {
    const {name,slots,_id} = treatment
    const [user,loading] = useAuthState(auth)
    if(loading){
      return <Loading/>
    }
    const formatDate = format(selected,'PP')
    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value
       const phone = event.target.phone.value
        const booking = {
          treatmentId : _id,
          treatment:name,
          date:formatDate,
          slot,
          patient:user.email,
          patientName : user.displayName,
          phone: phone
        } 
        fetch('http://localhost:5000/booking',{
          method:'POST',
          headers:{
            'content-type' : 'application/json'
          },
          body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => { 
          console.log(data)
          if(data.success){

            toast(`booking successfull at ${formatDate} at ${slot} `)
          }
          else{
            toast('you already have an appointment')
          }
          setTreatment(null) 
          refetch()
        })
    }
  return (
    <div>
        <input type="checkbox" id="treatment-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="treatment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-center">You are booking for : {name}</h3>
    <form className='grid grid-cols-1 gap-4 mt-4 justify-items-center' onSubmit={handleSubmit}>
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  " disabled value={format(selected,'PP')} />
    <select name='slot' className="select select-info w-full max-w-xs  ">
  {
      slots?.map((slot,index )=> <option value={slot} key={index}>{slot}</option>)
  }
</select>
    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs  " />
    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs  " />
    <input type="number" name='phone' placeholder="phone number" className="input input-bordered w-full max-w-xs  " />
    <input type="submit" value="Submit" className='btn btn-secondary text-white' />
    </form>
    
  </div>
</div>
    </div>
  )
}

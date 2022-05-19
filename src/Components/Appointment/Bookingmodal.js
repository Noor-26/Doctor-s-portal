import { format } from 'date-fns'
import React from 'react'

export default function Bookingmodal({treatment,selected,setTreatment}) {
    const {name,slots} = treatment
    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value
       const name = event.target.name.value
       const phone = event.target.phone.value
       const email = event.target.email.value
       setTreatment(null) 
    }
  return (
    <div>
        <input type="checkbox" id="treatment-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="treatment-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-center">You are booking for : {name}</h3>
    <form className='grid grid-cols-1 gap-4 mt-4 justify-items-center' onSubmit={handleSubmit}>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs  " disabled value={format(selected,'PP')} />
    <select name='slot' class="select select-info w-full max-w-xs  ">
  {
      slots?.map(slot => <option value={slot}>{slot}</option>)
  }
</select>
    <input type="text" name='name' placeholder="Your name" class="input input-bordered w-full max-w-xs  " />
    <input type="email" name='email' placeholder=" your email" class="input input-bordered w-full max-w-xs  " />
    <input type="number" name='phone' placeholder="phone number" class="input input-bordered w-full max-w-xs  " />
    <input type="submit" value="Submit" className='btn btn-primary' />
    </form>
    
  </div>
</div>
    </div>
  )
}

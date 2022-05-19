import React from 'react'
import Button from '../../../Shared/Button/Button'

export default function Service({service,setTreatment}) {
    const {name,slots} = service
    
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{name}</h2>
      <p>{
          slots.length > 0 ? <span>{slots[0]}</span>
          : <span className='text-red-500'> No slots avaliable,Try another day </span>
          }</p>
      <p>{slots.length } {slots.length < 2 ? "space" : "spaces"} Available</p>
      <div class="card-actions">

       <label for="treatment-modal" 
       class="btn modal-button bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary text-white font-bold"
       disabled={slots.length === 0}
       onClick={() => setTreatment(service)}
       >Book Appointment</label>
      </div>
    </div>
  </div>
  )
}

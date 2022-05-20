import React from 'react'
import Button from '../../../Shared/Button/Button'

export default function Service({service,setTreatment}) {
    const {name,slots,avaliable} = service
    
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{
          avaliable.length > 0 ? <span>{avaliable[0]}</span>
          : <span className='text-red-500'> No slots avaliable,Try another day </span>
          }</p>
      <p>{avaliable.length } {avaliable.length < 2 ? "space" : "spaces"} Available</p>
      <div className="card-actions">

       <label htmlFor="treatment-modal" 
       className="btn modal-button bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary text-white font-bold"
       disabled={slots.length === 0}
       onClick={() => setTreatment(service)}
       >Book Appointment</label>
      </div>
    </div>
  </div>
  )
}

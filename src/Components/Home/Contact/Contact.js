import React from 'react'
import Button from '../../Shared/Button/Button'
import appointment from '../../../images/images/appointment.png'

export default function Contact() {
  return (
    <div className='text-center' style={{
        background: `url(${appointment})`
    }}>
        <p className='text-primary font-bold mt-5 pt-5'>Contact us</p>
        <p className='text-3xl text-white'>Stay connected with us</p>
      <div className="card-body w-2/4 mx-auto  ">
      <input type="email" placeholder="Email address" className="input input-bordered w-full max-w-md mx-auto" />
      <input type="email" placeholder="Subject" className="input input-bordered w-full max-w-md mx-auto" />
      

      <textarea className="textarea textarea-bordered max-w-md mx-auto " placeholder="Your massage" cols="63" rows="6" ></textarea>
    
      

        <div className="form-control mt-6 mx-auto block">
            
          <Button >Submit</Button>
        </div>
      </div>

    </div>
  )
}

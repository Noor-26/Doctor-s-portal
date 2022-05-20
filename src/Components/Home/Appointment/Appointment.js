import React from 'react'
import Button from '../../Shared/Button/Button'
import appointment from '../../../images/images/appointment.png'
import doctor from '../../../images/images/doctor-small.png'

export default function Appointment() {
  return (
    <div className='my-10' style={{
        background: `url(${appointment})`
    }} >
  <div className="flex justify-center items-center">
      <div className='flex-1'>

    <img src={doctor} className="max-w-md mt-[-80px] mx-auto " />
      </div>
    
    <div className=' flex-1 '>
        <p className='text-primary font-bold'>Appointment</p>
      <h1 className="text-3xl font-bold text-white">Make an appointment Today</h1>
      <p className="py-2 w-4/5 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
  )
}

import React from 'react'
import treatment from '../../../images/images/treatment.png'
import Button from '../../Shared/Button/Button'
export default function Treatment() {
  return (
    <div className="hero min-h-screen bg-base-100 w-4/5 mx-auto">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='px-12'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
  )
}

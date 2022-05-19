import React from 'react'

export default function Testimonialcard({review}) {
    const {name,img,location,client_review} = review
  return (
    <div className='px-12 shadow-xl rounded-xl'>
        <div className='my-6 '>
            <p>{client_review}</p>
        </div>

        <div className='flex items-center justify-around'>
            <div className='my-3 '>
            <div class="avatar ">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} />
  </div>
</div>
            </div>
            <div>
            <p>{name}</p>
            <p>{location}</p>
            </div>
        </div>
        
        
    </div>
  )
}

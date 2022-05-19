import React from 'react'

export default function Infocard({info}) {
    const {name,description,img,bg} = info
  return (
    <div class={`card card-side bg-base-100 shadow-xl ${bg}`}>
  <figure><img src={img}alt="Movie" className='px-5 py-7 '/></figure>
  <div class="card-body text-white">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    
  </div>
</div>
  )
}

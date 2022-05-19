import React from 'react'

export default function Servicecard({service}) {
    const {description,name,img} = service
  return (
    <div class="card w-96 bg-base-100 shadow-lg">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
   
  </div>
</div>
  )
}

import React from 'react'
import Servicecard from './Servicecard/Servicecard'
import whitening from '../../../images/images/whitening.png'
import fluoride from '../../../images/images/fluoride.png'
import cavity from '../../../images/images/cavity.png'

export default function Services() {
  const services =[
    {id:1,
      name:"Fluoride Treatment",
      description:"typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
      img:fluoride}, 
    {id:1,
      name:"Cavity Filling",
      description:"If you have  symptoms  , you might have pain in your teeth or . Cavity pain  depends on the extent of your cavity . Regardless if your cavity symptoms are mild or severe, you ought to visit our dentist as you are likely to need a filling.",
      img:cavity},
    {id:1,
      name:"Teeth Whitening",
      description:"Tooth whitening or tooth bleaching is the process of lightening the color of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons, and can be achieved by changing the intrinsic or extrinsic color of the tooth enamel.",
      img:whitening},
  ]
  return (
    <div>
        <div className="text-center">
        <h3 className=' font-bold text-2xl text-primary'>Our services</h3>
        <h2 className=' text-3xl'>Services We Provide</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-14'>
          {
            services.map(service => <Servicecard service={service} key={service.id}/>)
          }
        </div>
    </div>
  )
}

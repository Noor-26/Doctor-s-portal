import React from 'react'
import quote from '../../../images/icons/quote.svg'
import people1 from '../../../images/images/people1.png'
import people2 from '../../../images/images/people2.png'
import people3 from '../../../images/images/people3.png'
import Testimonialcard from './Testimonialcard/Testimonialcard'



export default function Testimonial() {
    const reviews = [
        {
            id:1,
            name:"Winson Herry",
            img:people1,
            location:"california",
            client_review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id:2,
            name:"Winson Herry",
            img:people2,
            location:"california",
            client_review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },  {
            id:3,
            name:"Winson Herry",
            img:people3,
            location:"california",
            client_review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
  return (
    <div className='px-12'>
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-primary font-bold'>Testimonial</h3>
                    <h3 className='text-2xl'>What Our Patients Says</h3>

                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14'>
        {
            reviews.map(review => <Testimonialcard review={review}/>)
        }
            </div>

        </div>
    </div>
  )
}

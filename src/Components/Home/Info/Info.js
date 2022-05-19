import React from 'react'
import Infocard from './Infocard/Infocard'
import clock from '../../../images/icons/clock.svg'
import marker from '../../../images/icons/marker.svg'
import phone from '../../../images/icons/phone.png'


export default function Info() {
    const infos =[
        {id:1,
            description:"we will be you side on 24/7",name:"Opening hours",
            img:clock,
            bg:"bg-gradient-to-r from-secondary to-primary"},
        {id:2,
            description:"Brooklyn, NY 10036, United States",name:"Visit our location",
            img:marker,
            bg:"bg-accent"
        },
        {id:3,
            description:"+000 123 456789",
            name:"Contact us now",
            img:phone,
            bg:"bg-gradient-to-r from-secondary to-primary"
        }

    ]
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-14'>
{
    infos.map(info=><Infocard info={info} key={info.id} />)
}
    </div>
  )
}

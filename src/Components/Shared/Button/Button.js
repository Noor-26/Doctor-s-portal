import React from 'react'

export default function Button({children}) {
  return (
    <button className="btn btn-primary font-bold text-white uppercase bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">{children}</button>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
        <div className='img'>
        <p>click here to<NavLink to={"/"}> HOME</NavLink></p>
        </div>
       
    </div>
  )
}

export default PageNotFound

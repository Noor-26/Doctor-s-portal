import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Dashboard.css'
function Dashboard() {
  return (
    <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
      <p className='text-4xl m-3'>Dashboard</p>
<Outlet/>
    
  
  </div> 
  <div class="drawer-side ">
    <label for="my-drawer-2" class=" drawer-overlay bg-white "></label> 
    <ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">

      <li><Link to='/dashboard'>My Appointment</Link></li>
      <li><Link to='/dashboard/myreview'>My Review</Link></li>
    </ul>
  
  </div>
</div>
  )
}

export default Dashboard
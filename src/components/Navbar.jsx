import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='w-full pb-5 pt-10 bg-linear-to-r/srgb from-indigo-500 to-teal-400 px-10 flex justify-between border-gray-400  border-b-2 items-center'>
        <Link to={'/profile'} className='text-2xl font-bold'>Hey, Neeraj</Link>
        <div className='flex items-center gap-8'>
          <Link to={'/home'} >Home</Link>
            <Link  to={'/createchedule'}>Add education</Link>
            <Link to={'/addschedule'}>Add Schedule</Link>
            <Link to={'/upcomingschedule'}>Upcoming Schedule</Link>
            
            <Link to={'/about'}>About us</Link>
        </div>
    </div>
      
    </>
  )
}

export default Navbar

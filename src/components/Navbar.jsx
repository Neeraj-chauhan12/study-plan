import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

    const [menu,setmenu]=useState(false);

  return (
    <>
    <div className='w-full pb-5 pt-10 bg-linear-to-r/srgb from-indigo-500 to-teal-400 px-10 flex justify-between border-gray-400  border-b-2 items-center'>
        <Link to={'/profile'} className='text-2xl font-bold'>Hey, Neeraj</Link>

        <div className='hidden md:flex items-center gap-8'>
            <Link to={'/home'} >Home</Link>
            <Link  to={'/createchedule'}>Add education</Link>
            <Link to={'/addschedule'}>Add Schedule</Link>
            <Link to={'/upcomingschedule'}>Upcoming Schedule</Link>
            <Link to={'/about'}>About us</Link>
        </div>

           <div className='md:hidden' onClick={()=> setmenu(!menu)}>
          { menu ?<IoCloseSharp size={24}/>: <AiOutlineMenu size={24}/>}
        </div>

    </div>

       {
            menu && (
              <div>
            <div className=' md:hidden flex h-screen  justify-center  bg-linear-to-r/srgb from-indigo-500 to-teal-400 items-center gap-4 text-3xl flex-col'>
              <Link onClick={()=>setmenu(!menu)} to={'/home'} >Home</Link>
            <Link onClick={()=>setmenu(!menu)}  to={'/createchedule'}>Add education</Link>
            <Link onClick={()=>setmenu(!menu)} to={'/addschedule'}>Add Schedule</Link>
            <Link onClick={()=>setmenu(!menu)} to={'/upcomingschedule'}>Upcoming Schedule</Link>
            <Link onClick={()=>setmenu(!menu)} to={'/about'}>About us</Link>
            
         </div>
         </div>

         


            )
          }
      
    </>
  )
}

export default Navbar

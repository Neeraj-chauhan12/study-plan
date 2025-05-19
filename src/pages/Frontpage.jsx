import React from 'react'
import pic from '/pic.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Frontpage = () => {
  return (
    <>
    <div className='h-screen w-screen relative'>
        <h1 className='absolute top-5 left-40 text-4xl  text-white'>Study Planner</h1>
  <div className='h-full w-full' style={{backgroundImage:`url(https://wallpapercave.com/wp/wp2036000.jpg)`, backgroundSize:"cover"}}>
      
       </div >
       <div className='border-2 border-green-500 bg-white text-black rounded absolute bottom-5 px-8 py-2 left-[40vw] flex justify-center items-center'>
        <Link to={'/home'} className='bg-gradient-to-t from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text text-3xl font-bold flex gap-20 justify-center items-center '>Continue <span ><FaArrowRight className='text-black' /></span></Link>
       </div>
    </div>
    
    
    </>
  )
}

export default Frontpage

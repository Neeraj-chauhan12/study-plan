import React from 'react'
import pic from '/pic.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Frontpage = () => {
  return (
    <>
    <div className='h-screen w-screen md:relative'>
        <h1 className='absolute md:top-5 md:left-40 text-4xl my-5 mx-5 text-black md:text-white'>Study Planner</h1>
  <div className='h-screen w-screen'>
      <img className='md:object-cover h-screen w-screen object-contain' src="https://wallpapercave.com/wp/wp2036000.jpg" alt="" />
       </div >
       <div className='border-2 border-green-500 bg-white text-black rounded absolute left-8 bottom-5 px-8 py-2 md:left-[40vw] flex justify-center items-center'>
        <Link to={'/home'} className='bg-gradient-to-t from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text text-3xl font-bold flex gap-20 justify-center items-center '>Continue <span ><FaArrowRight className='text-black' /></span></Link>
       </div>
    </div>
    
    
    </>
  )
}

export default Frontpage

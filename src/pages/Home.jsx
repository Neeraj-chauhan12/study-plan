import React from 'react'

import Navbar from '../components/Navbar'
import Educationschedule from '../components/Educationschedule'
import EducationUpcoming from './EducationUpcoming'

const Home = () => {

   

  return (
    <>
    <div className='min-h-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400 w-screen overflow-x-hidden'>
        <Navbar />
       
       
       <div className='flex justify-between mt-3 px-5 py-2 '>
         <h1 className='text-3xl font-bold'>Education Schedule</h1>
         <div className="join text-3xl">
  <button className="join-item btn">«</button>
  <button className="join-item btn">Page 22</button>
  <button className="join-item btn">»</button>
</div>


       </div>
       
       
        

       <div>
        <Educationschedule />
       </div>

      


      <div className='flex justify-between px-5 py-2 '>
         <h1 className='text-3xl  font-bold'>Education Upcoming Schedule</h1>
         <div className="join text-3xl mt-3">
  <button className="join-item btn">«</button>
  <button className="join-item btn">Page 22</button>
  <button className="join-item btn">»</button>
</div>

         {/* For TSX uncomment the commented types below */}

      </div>
      
      
        


       <div>
        <EducationUpcoming />
       </div>
       

    </div>
      
    </>
  )
}

export default Home

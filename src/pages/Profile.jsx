import React from 'react'
import { IoMdTime } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { IoCode } from "react-icons/io5";
import { MdIncompleteCircle } from "react-icons/md";
import { FaStreetView } from "react-icons/fa";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import {} from 'cally'

const Profile = () => {

    const data=[
        {
            id:1,
            icon:<IoMdTime />,
            head:"hour studies",
            mid:"56H"
        },
           {
            id:2,
            icon:<MdIncompleteCircle />,
            head:"completion rate",
            mid:"56%"
        },
           {
            id:3,
            icon:<MdMenuBook />,
            head:"Total studies",
            mid:"12"
        },
           {
            id:4,
            icon:<IoCode />,
            head:"Most study ",
            mid:"programming"
        },
        
           {
            id:5,
            icon:<FaStreetView />,
            head:"Active days",
            mid:"12"
        },
           {
            id:6,
            icon:<FaFire />,
            head:"Max Streak",
            mid:"26 days"
        },
        
           {
            id:7,
            icon:<FaHandsAslInterpreting />,
            head:"More prefer",
            mid:"DSA"
        },
           {
            id:8,
            icon:<IoCode />,
            head:"Last year study ",
            mid:"150days"
        },
    ]

  return (
    <>
    <div className='w-screen h-screen flex'>
        <div className='h-screen  w-1/2 bg-linear-to-r/srgb from-indigo-500 to-teal-400 flex flex-col py-3'>
         <h1 className='text-2xl font-bold my-5'>Hours Studies</h1>
         <div className='flex justify-around items-center py-2 px-3 bg-gray-200'>
            <h1>0</h1>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
            <h1>5</h1>
            <h1>6</h1>
            <h1>7</h1>
         </div>
             <div className='overflow-y-scroll '>
                  <progress className="progress progress-secondary w-full h-5 my-2" value="10" max="100"></progress>
                  <progress className="progress progress-secondary w-full h-5 my-2" value={0} max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="40" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="70" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="100" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="10" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="40" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="70" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="100" max="100"></progress>
                     <progress className="progress progress-secondary w-full h-5 my-2" value="100" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="10" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="40" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="70" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2 " value="100" max="100"></progress>
                       <progress className="progress progress-secondary w-full h-5 my-2" value="100" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="10" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="40" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2" value="70" max="100"></progress>
                   <progress className="progress progress-secondary w-full h-5 my-2 " value="100" max="100"></progress>
            

             </div>
          
          
    
        </div>

        <div className='h-screen w-1/2 bg-linear-to-r/srgb from-indigo-500 to-teal-400 justify-center items-center gap-x-16 flex flex-wrap '>
  

<calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
  <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
  <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
  <calendar-month></calendar-month>
</calendar-date>
        
        
        

        </div>
    </div>

    <div className='h-screen w-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400 justify-center items-center gap-x-16 flex flex-wrap' >
        {
            data.map(({id,icon,head,mid})=>{
                return(
                    <div className='h-56 p-4 w-80 border-2 border-gray-600 rounded' key={id}>
                        <div className='h-full w-full border-l-4 px-3 border-red-400'>
                          <div className='flex justify-between items-center'>
                            <h1 className='text-2xl'>{head}</h1>
                            <h1 className='text-3xl'>{icon}</h1>
                        </div>

                        <div className='text-4xl my-16'>{mid}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
      
    </>
  )
}

export default Profile

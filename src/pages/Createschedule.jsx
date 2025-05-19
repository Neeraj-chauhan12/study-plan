import React, { useRef, useState } from 'react'
import Educationschedule from '../components/Educationschedule';
import { use } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { FaChevronDown } from "react-icons/fa";


const Createschedule = () => {
  const [manage,setmanage]=useState(false)
  const manageref=useRef(null)

   useGSAP(function(){
    if(manage){
    gsap.to(manageref.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(manageref.current,{
        transform:'translateY(100%)'
    })
  }
  },[manage])

  const [subject,setsubject]=useState('')
  const [image,setimage]=useState();
  const [desc,setdesc]=useState('')
  const [main,setmain]=useState([])

function handlebtn(e){
  e.preventDefault();

  setmain([...main,{image,subject,desc}])
    console.log(main)

  setdesc('');
  setsubject('');
  setimage('')

}

function deletebtn(i) {
  let copytask= [...main]
  copytask.splice(i,1)
  setmain(copytask)
  
}

let rendertask= <div className='flex justify-center mt-6 items-center'>
  <h1 className='text-4xl uppercase '>no data is available</h1>
</div> 



 if(main.length>0){
  rendertask=main.map((t,i)=>{
    return(
      <>
        <div key={i} className='h-72 w-60 border-4 rounded border-black'>
          <img className='h-44 w-full' src={t.image} alt="" />

          <h1 className='text-2xl px-1 mb-3 mt-1'>{`1- ${t.subject}`}</h1>
          <div className='flex justify-between items-center px-2'>
          <h1 className='text-md text-white'>{`2- ${t.desc}`}</h1>

           <button onClick={(i)=>{deletebtn(i)}} className='px-4 py-1 bg-red-400 hover:bg-red-600 hover:text-white text-sm rounded'>delete</button>
          
          </div>
       
       
        </div>
      </>
    )
   })

 }

  return (
    <>
    <div className='h-screen relative bg-linear-to-r/srgb from-indigo-500 to-teal-400 w-screen md:px-0 px-5 flex justify-center items-center'>
        <form 
        onSubmit={handlebtn}
        className='md:w-96 w-full border-4 border-green-500 py-5 px-8 rounded flex flex-col gap-5'>
            

            <div>
                 <h1 className='md:text-2xl text-md font-bold'>Select Image</h1>
           <select 
           onChange={(e)=>{setimage(e.target.value)}}
           value={image}
           className='w-full py-2 px-3 text-2xl rounded bg-gray-300'  >
            <option value="https://img.freepik.com/premium-photo/focused-boy-sitting-desk-engrossed-programming-his-eyes-fixed-computer-screen-fingers-typing-swiftly-keyboard-generative-ai_213438-11043.jpg">image</option>
            <option value="http://clipart-library.com/img1/1162647.png">image1</option>
            <option value="https://static.vecteezy.com/system/resources/previews/021/837/336/non_2x/ai-generated-3d-cute-student-boy-studying-papers-on-the-desk-in-room-photo.jpg">Image2</option>
            <option value="https://wallpapercave.com/wp/wp11060603.jpg">Image3</option>
            
           </select>
            </div>
            



<div>
 <h1 className='text-md md:text-2xl mb-2'>Enter the subject name</h1>
           <input 
           value={subject}
           onChange={(e)=>{setsubject(e.target.value)}}
           placeholder='Enter the subject name'
           className='w-full py-2 px-3 rounded text-md md:text-2xl bg-gray-300 '
           type="text" 
        
           />
</div>
             
             

           <div>
        <h1 className='text-md md:text-2xl mb-2'>Enter the subject description</h1>
           <input 
           value={desc}
           onChange={(e)=>{setdesc(e.target.value)}}
           placeholder='Enter the subject description '
           className='w-full py-2 px-3 rounded text-md md:text-2xl bg-gray-300 '
           type="text" 
         
           />
           </div>
          

          <button onClick={()=>{setmanage(true)}}  className='bg-green-500 rounded border-2 py-3 text-md md:text-2xl border-green-700'>Submit</button>
          
        </form>
    </div>


    
    <div ref={manageref} className='bg-linear-to-r/srgb w-full overflow-y-scroll bottom-0 translate-y-full bg-white fixed z-10  py-3 from-indigo-500 to-teal-400 '>
    <h1 className='flex justify-center items-center pb-3 pt-10 w-full text-4xl text-white' onClick={()=>{setmanage(false)}}><FaChevronDown  /></h1>
    <h1 className='text-2xl md:text-4xl bg-linear-to-r/srgb from-indigo-500 to-teal-400 font-bold px-10 my-5'>Education Schedule</h1>

    <div className='md:px-10 px-14 gap-10 flex flex-wrap w-full '>
    {rendertask}
    </div>
     
     
    </div>
      
    </>
  )
}

export default Createschedule

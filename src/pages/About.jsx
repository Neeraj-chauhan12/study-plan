import React from 'react'
import pic from '../../public/neeraj.jpg'
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";


const About = () => {
  return (
    <>
    <div className='bg-linear-to-r/srgb from-indigo-500 to-teal-400 min-h-screen w-screen flex md:flex-row flex-col'>
    <div className='md:h-screen h-[80vh] md:w-1/2 w-screen  flex justify-center items-center -rotate-12'>
    <img className='md:w-[65%] md:h-[70%] object-cover h-[45vh] w-[90vw] rounded-full' src={pic} alt="" />

    </div>

    <div className='min-h-screen md:h-screen w-screen md:w-1/2 justify-center text-justify  flex flex-col px-10'>
    <h1 className='text-4xl mb-2 font-bold'>Neeraj chauhan</h1>
    <h1 className='text-3xl'>Full Stack Developer</h1>
    <p className='text-gray-600 mt-2 md:mb-0 mb-5'>My name is Neeraj, and I am a skilled full stack developer with a strong passion for building dynamic, 
        efficient, and user-centered web applications. I specialize in both frontend and backend development, 
        allowing me to create complete, end-to-end solutions. On the frontend, I have extensive experience working
         with modern technologies like HTML5, CSS3, JavaScript, and frameworks such as React.js and Next.js, enabling 
         me to develop responsive and visually appealing user interfaces. On the backend, I work with Node.js, Express,
          and various databases including MongoDB and MySQL to design robust APIs and manage data effectively. 
          I am well-versed in authentication systems, RESTful services, and integrating third-party APIs. I take pride in writing clean,
           maintainable code and following best practices in version control, testing, and deployment. My goal is to build scalable applications 
        that not only function smoothly but also offer great user experiences. As a lifelong learner, I continuously update my skills to stay
         current with evolving technologies.</p>

         <div className='flex mt-5 mb-5 md:mb-0 text-3xl gap-4'>
        <FaGithub />
        <FaInstagram />
        <FaLaptopCode />
        <FaLinkedin/>
        <SiLeetcode />
         </div>

    </div>

    
    

    </div>
    <div className='bg-linear-to-r/srgb from-indigo-500 to-teal-400 border-t-4 border-gray-600 md:h-[30vh] min-h-screen w-screen flex md:gap-0 gap-10 md:flex-row flex-col md:justify-around items-center'>


       {/* SKILL */}
        <div className='flex flex-col mb-2 mt-5 md:mt-0'>
            <h1 className='text-3xl font-bold'>Skill</h1>
            <div className='flex flex-col'>
                <h>Frontend</h>
                <h>Backend</h>
                <h>Java</h>
                <h>Leetcode problem solving</h>
            </div>
        </div>


       {/* PROJECTS */}
        <div className='flex flex-col ml-5 md:ml-0 mb-2'>
            <h1 className='text-3xl font-bold'>Project</h1>
            <div>
                <h1>Portfolio</h1>
                <h1>Food website</h1>
                <h1>Let's Go service provider</h1>
                <h1>Learning management platform </h1>
            </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className='flex flex-col mb-2'>
            <h1 className='text-3xl font-bold'>Social Network</h1>
            <div>
                <h1>Leecode 60+</h1>
                <h1>Linked In 1600+ followers</h1>
                <h1>Github</h1>
                <h1>Instagram</h1>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default About

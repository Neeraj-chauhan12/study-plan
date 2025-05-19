import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../context/AuthProvider';


const Signup = () => {
  const [authuser,setauthuser]=useAuth();

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
     async function onSubmit(data){
      const signupdata={
        name:data.name,
        email:data.email,
        password:data.password
      }
      //api call from backend
      await axios
      .post('http://localhost:3000/user/signup',signupdata)
      .then((response)=>{
        if (response.data) {
          alert("succesfully register");
        }
        localStorage.setItem("app", JSON.stringify(response.data));
        setauthuser(response.data)
      })
      .catch((error)=>{
        if(error.response){
          alert('error',error.response.data.error)
        }
      })
    }

  return (
    <>
    <div className=' h-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400 w-screen px-5 py-5 flex justify-center items-center flex-col'>

      <form className='flex flex-col justify-center items-center bg-linear-to-r/srgb from-indigo-500 to-teal-400 px-5 py-10 w-96 h-[60vh]'
      onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-3xl font-bold mb-5'>Study planner</h1>

        <h1 className='text-2xl '>What's your name</h1>
        <input 
        required
        className='bg-gray-300 w-full mt-1  px-1 py-2 rounded  mb-5'
        type="text"  
        placeholder='email@example.com'
        {...register('name', { required: true })}
        />

        <h1 className='text-2xl '>What's your email</h1>
        <input 
        required
        className='bg-gray-300 w-full mt-1  px-1 py-2 rounded  mb-5'
        type="email"  
        placeholder='email@example.com'
        {...register('email', { required: true })}
        />

        <h1>Enter Password</h1>
        <input 
        required
        className='bg-gray-300 w-full mt-1 py-2 rounded px-1  mb-5 '
        type="password"  
        placeholder='password'
        {...register('password', { required: true })}
        />

        <button className='flex justify-center items-center text-white w-full bg-black rounded text-2xl py-2'>Create account</button>
        <h1 className='text-black'>Have an account? <Link className='text-red-500' to='/login'>login as user</Link></h1>
      </form>
    

    
    
    </div>
      
    </>
  )
}

export default Signup

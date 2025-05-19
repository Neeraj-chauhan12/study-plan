import React from 'react'
import Frontpage from './pages/Frontpage'
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Createschedule from './pages/Createschedule'
import EducationUpcoming from './pages/EducationUpcoming'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import AddSchedule from './pages/AddSchedule'
import About from './pages/About'
import { useAuth } from './context/AuthProvider'
import Login from './pages/Login'
import Signup from './pages/Signup'



const App = () => {

   const [authuser,setauthuser]=useAuth();

  return (
    <>

    <Routes>
      <Route path='/' element={  <Frontpage />}/>
       <Route path='/home' element={authuser? <Home/> :(<Navigate to={"/login"}/>) } />
      <Route path='/login' element={authuser ? <Navigate to="/home" />:<Login />} />
      <Route path='/signup' element={authuser ? <Navigate to="/home" /> :<Signup />} />
      
        <Route path='/profile' element={authuser?<div><Navbar /> <Profile /></div>:(<Navigate to={"/login"} />)} />
        <Route path='/createchedule' element={authuser?<div><Navbar /> <Createschedule /></div> :(<Navigate to={"/login"} />)} />
        <Route path='/upcomingschedule' element={authuser?<div><Navbar /> <EducationUpcoming /></div> :(<Navigate to={"/login"} />)} />
        <Route path='/addschedule' element={authuser?<div><Navbar /> <AddSchedule/></div>:(<Navigate to={"/login"} />)} />
         <Route path='/about' element={authuser?<div><Navbar /> <About/></div>:(<Navigate to={"/login"} />)} />

    </Routes>
 
 
    </>
  )
}

export default App

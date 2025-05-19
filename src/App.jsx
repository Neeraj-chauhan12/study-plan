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




const App = () => {

  

  return (
    <>

    <Routes>
      <Route path='/' element={  <Frontpage />}/>
       <Route path='/home' element={ <div>  <Home/> </div>
       } />
      
      
        <Route path='/profile' element={<div><Navbar /> <Profile /></div>} />
        <Route path='/createchedule' element={<div><Navbar /> <Createschedule /></div> } />
        <Route path='/upcomingschedule' element={<div><Navbar /> <EducationUpcoming /></div> } />
        <Route path='/addschedule' element={<div><Navbar /> <AddSchedule/></div>} />
         <Route path='/about' element={<div><Navbar /> <About/></div>} />

    </Routes>
 
 
    </>
  )
}

export default App

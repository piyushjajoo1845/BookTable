import React from 'react'
import Navbar from './components/Navbar'

import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import AllCafes from './pages/AllCafes';
import SelectedCafedetail from './pages/SelectedCafedetail';
import Footer from './components/footer';
import MyBookings from './pages/MyBookings ';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
   //whenever the isOwnerPth is true we have to hide the navigation bar for the owner
  return (
    <div>
      { !isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cafe' element={<AllCafes/>}/>
          <Route path='/cafe/:id' element={<SelectedCafedetail/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
        </Routes>


      </div>
      <Footer/>
    </div>
  )
}

export default App
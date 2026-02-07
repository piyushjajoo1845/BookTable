import React from 'react'
import Navbar from './components/Navbar'

import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import AllCafes from './pages/AllCafes';
import SelectedCafedetail from './pages/SelectedCafedetail';
import Footer from './components/footer';
import MyBookings from './pages/MyBookings ';
import CafeRegistration from './components/CafeRegistration';
import Layout from './pages/CafeOwner/Layout';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
   //whenever the isOwnerPth is true we have to hide the navigation bar for the owner
  return (
    <div>
      { !isOwnerPath && <Navbar/>}
      {/* false will make this CafeRegistration component hide */}
      {false && <CafeRegistration/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cafe' element={<AllCafes/>}/>
          <Route path='/cafe/:id' element={<SelectedCafedetail/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
          <Route path='/owner' element={<Layout/>}>

          </Route>
        </Routes>


      </div>
      <Footer/>
    </div>
  )
}

export default App
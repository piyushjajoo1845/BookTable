import React from 'react'
import Navbar from './components/Navbar'

import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
   //whenever the isOwnerPth is true we have to hide the navigation bar for the owner
  return (
    <div>
      { !isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
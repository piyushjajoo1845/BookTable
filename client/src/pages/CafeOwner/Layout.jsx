import React from 'react'
import NavbarOwner from '../../components/CafeOwner/NavbarOwner'
import Sidebar from '../../components/CafeOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
        <NavbarOwner/>
        <div className='flex h-full'>
            {/* sidebar */}
            <Sidebar/>
            <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
                {/* childrens */}
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout
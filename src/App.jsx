
import React, { useState } from 'react'
import Header from './components/Header'

import Dashboard from './components/Dashboard';

import SideBar from './components/SideBar';

const App = () => {
  const [sidebartoggle, setSidebartoggle] = useState(false);
  const handlesidebar = () => {
    setSidebartoggle(!sidebartoggle)

  }
  return (
    <>
      <div className='  '>
        <div className='w-full h-[10%]  fixed  z-50'>
          <Header handlesidebar={handlesidebar} />
        </div>
        <div className='  flex h-[90%]   sm:pt-13 pt-12'>
          <SideBar sidebartoggle={sidebartoggle} />
          <div className='  w-full md:pl-20 p-3 bg-gray-900 '>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

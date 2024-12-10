
import React, { useState } from 'react'
import Header from './components/Header'
import { IoHomeOutline } from "react-icons/io5";
import Dashboard from './components/Dashboard';
import { VscGraph } from "react-icons/vsc";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";

const App = () => {
  const [sidebartoggle, setSidebartoggle] = useState(true);
  const handlesidebar = () => {
    setSidebartoggle(!sidebartoggle)

  }
  return (
    <>
      <div className=' h-full '>
        <div className='w-full h-[10%]  fixed  z-50'>
          <Header handlesidebar={handlesidebar} />
        </div>
        <div className='  flex h-[90%]   sm:pt-14 pt-12'>
          <div className={`${sidebartoggle ? "w-[5%]" : "w-[10%]"}  bg-gray-600  py-2 md:flex fixed h-[92%] z-50   flex-col justify-between items-center `}>
            <div className=' w-full my-4 h-full flex flex-col justify-between'>
              <ul className=' space-y-2   *:text-2xl w-full  *:py-2 *:items-center *:flex *:flex-col text-white  *:cursor-pointer *:border-l-4  *:border-l-transparent'>
                <li className='hover:border-blue-500 hover:text-blue-500 '><IoHomeOutline /></li>
                <li className='hover:border-blue-500 hover:text-blue-500 '><VscGraph /></li>
                <li className='hover:border-blue-500 hover:text-blue-500 '><BsFileEarmarkBarGraph /></li>
                <li className='hover:border-blue-500 hover:text-blue-500 '><BsBagCheck /></li>
              </ul>
              <div className='mx-auto'>
                <span className='hover:border-blue-500 text-2xl  text-white cursor-pointer hover:text-blue-500 '><RiLogoutCircleRLine /></span>
              </div>
            </div>
          </div>
          <div className='  w-full md:pl-20 p-3 bg-gray-900 '>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

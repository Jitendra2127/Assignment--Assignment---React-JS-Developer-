import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiMenuFold3Line } from "react-icons/ri";

const Header = ({handlesidebar}) => {
    
    return (
        <>
            <header className='p-2 bg-gray-600 h-full   flex justify-between items-center'>

                <div className="flex gap-2 w-[30%] ">
                    <span className='flex justify-center text-white text-2xl items-center w-[20%] cursor-pointer    ' onClick={()=>handlesidebar()}><RiMenuFold3Line /></span>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-2 outline-none text-white ps-10 text-sm   bg-gray-400 rounded" placeholder="Search..." />
                    </div>
                </div>
                <div>
                    <ul className='flex gap-2 *:border  *:p-1 *:rounded-full *:bg-gray-100 *:cursor-pointer'  >
                        <li><CiMail /></li>
                        <li><CiSettings /></li>
                        <li><AiOutlineBell /></li>
                        <li><CiUser /></li>

                    </ul>
                </div>


            </header>
        </>
    )
}

export default Header

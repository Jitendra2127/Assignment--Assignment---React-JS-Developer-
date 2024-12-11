import React from 'react'
import { VscGraph } from "react-icons/vsc";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
const SideBar = ({sidebartoggle}) => {
    return (
        <>
            <div className={`w-[5%] hidden bg-gray-600  py-2 md:flex fixed h-[95%] z-50   flex-col justify-between items-center `}>
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
            {
                sidebartoggle && <div className={` bg-gray-600  py-2 px-4 pb-10 md:flex fixed h-[92%] z-50   flex-col justify-between items-center `}>
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
            }
        </>
    )
}

export default SideBar

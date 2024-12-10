import React from 'react'
import Graph from './Graph'
import { GoGoal } from "react-icons/go";
import { PiGreaterThanLight } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { CgMenuHotdog } from "react-icons/cg";

const DashboardGraphSection = () => {
    return (
        <>
            <div className=' *:bg-gray-600 *:rounded flex md:flex-row flex-col gap-4 *:p-4 *:h-56 '>
                <div className=' md:w-[65%] w-full flex flex-col  '>
                    <div className='justify-between flex   px-4 text-white'>
                        <span className=' text-3xl font-bold'>Active</span>
                        <select className='rounded-full p-1  outline-none  h-fit bg-gray-500  '>
                            <option value="">Weekly</option>
                            <option value="">Monthly</option>
                            <option value="">Early</option>
                        </select>
                    </div>
                    <div className='border  h-full *:border p-2'>
                        <Graph />
                    </div>
                </div>
                <div className=' md:w-[35%] w-full space-y-2 '>
                    <GoalSection image={<GoGoal />} title="Goals" color="red"/>
                    <GoalSection image={<CgMenuHotdog />} title="Popular Dishes" color="blue"/>
                    <GoalSection image={<BiDish />} title="Menus" color="green"/>
                </div>
            </div>
        </>
    )
}

export default DashboardGraphSection

const GoalSection = ({image,title,color}) => {
    return (
        <>
            <div className='flex justify-between text-white items-center'>

                <div className=' flex  items-center gap-2 '>
                    <div className={` ${title==="Goals"?"bg-red-500/30 text-red-700":title==="Menus"?"bg-green-500/30 text-green-800":"bg-blue-500/30 text-blue-700"}   h-fit p-4 text-2xl  rounded-full`}>{image}</div>
                    <div>{title}</div>
                </div>
                <div>

                    <p className=' p-1 bg-gray-600/50 rounded-full'><PiGreaterThanLight /></p>
                </div>
            </div>
        </>
    )
}

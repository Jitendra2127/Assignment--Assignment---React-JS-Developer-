import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoMdArrowDropup } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { RiFolderReceivedFill } from "react-icons/ri";

const DashboardCardSection = () => {
   
    const percentage = 70;
    return (
        <>
            <div className='  flex md:flex-row flex-col gap-4 md:*:h-32'>
                <div className='md:w-[65%] w-full grid md:grid-cols-4 sm:grid-cols-2   *:cursor-pointer  *:rounded *:bg-gray-600 gap-2 *:h-full'>
                    <Card image={<IoHomeOutline />} title="Total Order" number="75" percentageNumber="3" percentageNumberColor="green" imageColor="blue" />
                    <Card image={<BsBagCheckFill />} title="Total Delivered" number="70" percentageNumber="3" percentageNumberColor="red" imageColor="green" />
                    <Card image={<BsBagXFill />} title="Total Cancelled" number="05" percentageNumber="3" percentageNumberColor="green" imageColor="orange" />
                    <Card image={<RiFolderReceivedFill />} title="Total Revenue" number="$12K" percentageNumber="3" percentageNumberColor="red" imageColor="pink" />


                </div>
                <div className='md:w-[35%] w-full  bg-gray-600 hover:bg-gray-500  rounded p-2 flex h-32 justify-between  '>
                    <div className=' flex flex-col justify-between text-white'>
                        <div>
                            <span>Net Profit</span>
                        </div>
                        <div className=' flex flex-col gap-4'>

                            <span className=' lg:text-4xl text-xl font-bold'>$ 6759.25</span>
                            <span className='flex text-green-500 items-center font-semibold'><IoMdArrowDropup />3%</span>
                        </div>
                    </div>


                    <CircularProgressbarWithChildren
                        className='h-full'
                        value={percentage}

                    >
                        {/* Custom text content */}
                        <div

                            className='align-center text-white flex flex-col  items-center text-[10px] '
                        >
                            <div className='lg:text-2xl font-bold'>{percentage}%</div>
                            <div>Goal</div>
                            <div>Completed</div>

                        </div>
                    </CircularProgressbarWithChildren>


                </div>

            </div>
        </>
    )
}

export default DashboardCardSection;

const Card = ({ image, title, number, percentageNumber, imageColor, percentageNumberColor }) => {
    return (
        <>
            <div className='p-2 flex flex-col justify-between hover:bg-gray-500 ' >
                <span className={`text-2xl w-fit p-2 rounded  bg-${imageColor}-300 text-${imageColor}-500`}>{image}</span>
                
                <span className='text-white max-lg:text-[12px]'>{title}</span>
                <div className=' flex justify-between'>
                    <span className='text-xl font-bold text-white'>{number}</span>
                    <span className={`flex justify-center items-center font-semibold ${percentageNumberColor === "green" ? "text-green-500" : "text-red-500"}`}><IoMdArrowDropup className={`${percentageNumberColor === "red" && "rotate-180"}`} />{percentageNumber}%</span>
                </div>
            </div>
        </>
    )
}

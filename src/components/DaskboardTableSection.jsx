import React from 'react'
import Table from './Table'
import CustomerFeedback from './CustomerFeedback'

const DaskboardTableSection = () => {
    return (
        <>
            <div className=' flex md:flex-row flex-col gap-4  '>
                <div className='md:w-[65%] w-full rounded p-2 bg-gray-500'>
                    <span className=' text-white text-2xl font-semibold'>Recent Orders</span>
                    <Table />
                </div>
                <div className=' md:w-[35%] w-full bg-gray-500 rounded p-2 space-y-2 overflow-y-scroll  scrollbar-hide  '>
                    <span className=' text-white text-2xl font-semibold'>Customer's Feedback</span>
                    <CustomerFeedback image="1" rating='4' name="Jenny Wilson" />
                    <CustomerFeedback image="2" rating='5' name="Dianne Rissell"/>
                    <CustomerFeedback image="3" rating='4' name="Devon Lane"/>

                </div>
            </div>
        </>
    )
}

export default DaskboardTableSection

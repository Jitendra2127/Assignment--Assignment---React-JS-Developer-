import React from 'react'
import DashboardCardSection from './DashboardCardSection'

import DashboardGraphSection from './DashboardGraphSection'
import DaskboardTableSection from './DaskboardTableSection'

const Dashboard = () => {
    return (
        <div className='space-y-4 mt-4 '>
            <p className='text-white font-semibold text-xl'>Dashboard</p>
            <div className=' space-y-4'>
                <DashboardCardSection/>
                <DashboardGraphSection/>
                <DaskboardTableSection/>
            </div>

        </div>
    )
}

export default Dashboard

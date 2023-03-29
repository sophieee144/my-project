import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Sidebar from '../Sidebar/Sidebar'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import AreaChart from './AreaChart'


const Chart = () => {
  
  return (
    <div className='bg-blue-50'>
        <div className="d-flex container-fluid flex-col fixed top-0 left-0 w-screen">
            <nav>
                <Nav />
            </nav>
            <div className="flex h-screen">
                <Sidebar />
                
                <main className="flex-1 p-4 overflow-y-auto">
                    <h2 className="text-3xl font-medium font-bold text-slate-700 mb-2">
                        Charts and graphics
                    </h2>
                    <div className="text-sm font-sans text-gray-500 mb-8">
                      Home / Chart  
                    </div>
                    {/* <h2 className="text-sm font-sans text-gray-500 mb-8">
                        Home / Dashboard
                    </h2> */}
                    <div className='flex flex-cols-2 mb-6 mx-4 gap-3'>
                        < LineChart />
                        < BarChart />
                        {/* < PieChart />
                        <AreaChart /> */}
                    </div>
                    
                </main>
            </div>
        </div>
    </div>
  )
}

export default Chart
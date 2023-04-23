import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import DoughnutChart from './DonutChart'
import AreaChart from './AreaChart'
import DonutChart from './DonutChart'


const Chart = () => {
  
  return (
    <div className='bg-blue-50'>
        <div className="d-flex container-fluid flex-col fixed top-0 left-0 w-screen">
            <nav>
                <Nav />
            </nav>
            <div className="flex h-screen">
                <Sidebar />
                
                <main className="flex-1 p-2 overflow-y-auto">
                    <div className='mx-3'> 
                        <h2 className="text-3xl font-medium font-bold text-slate-700 mb-2">
                            Charts
                        </h2>
                        <div className="text-sm font-sans text-gray-500 mb-8">
                            <div className="text-sm font-sans text-gray-500 mb-8">
                                <Link to={"/hdoc"} className="underline">Home</Link>
                                / Chart
                            </div>
                        </div>
                    </div>
                    {/* <h2 className="text-sm font-sans text-gray-500 mb-8">
                        Home / Dashboard
                    </h2> */}
                    <div className='grid grid-cols-1 mb-3 mx-2 gap-4'>
                        <AreaChart />  
                    </div>
                    <div className='grid grid-cols-2 mb-20 mx-2 gap-4 space-y-'>
                        < PieChart />
                        < BarChart />
                        < LineChart />
                        < DonutChart />
                        
                    </div>
                    
                </main>
            </div>
        </div>
    </div>
  )
}

export default Chart
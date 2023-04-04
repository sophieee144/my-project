import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Sidebar from '../Sidebar/Sidebar'
import Chart from './Table';
import LineChart from './Sparkline'
import Line from './Sparkbar'

const Dashboard = () => {
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
                        Dashboard
                    </h2>
                    <div className="text-sm font-sans text-gray-500 mb-8">
                        <Link to={"/hdoc"} className="underline">Home</Link>
                        / Dashboard
                    </div>
                    {/* <h2 className="text-sm font-sans text-gray-500 mb-8">
                        Home / Dashboard
                    </h2> */}
                    <div className="grid grid-rows-5 grid-flow-col pr-4 gap-3">
                        <div className="row-span-3 col-span-3 w-full px-4 py-5 mx-3 bg-white rounded-md shadow">
                            <div className="inline text-xl font-sans text-center text-slate-800">
                                Today's deaths 
                            </div>
                            <div className="inline text-xl font-medium pl-48 text-indigo-600">
                                $ 125,490 
                            </div>
                            <div className="text-sm font-sans text-left pt-2 text-gray-400 truncate">
                                January - July 2022
                            </div>
                        </div>
                        <div className="col-span-1 row-span-2 w-full px-4 py-5 mx-3 bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-700 rounded-md shadow">
                            <div className="text-3xl font-sans font-bold text-left text-slate-200 truncate">
                                $ 240
                            </div>
                            <div className="text-lg font-medium text-left text-gray-100 truncate">
                                This week death's
                            </div>
                            <LineChart />
                        </div>
                        <div className="col-span-2 row-span-2 w-full px-4 py-5 mx-3 bg-gradient-to-r from-red-400 via-red-600 to-red-700 rounded-md shadow">
                            <div className="text-3xl font-sans font-bold text-center text-slate-200 truncate">
                                $ 240
                            </div>
                            <div className="text-lg font-medium text-center text-gray-100 truncate">
                                This week death's
                            </div>
                            <LineChart />
                        </div>
                        <div className="row-span-5 w-full px-4 py-5 mx-3 bg-white rounded-md shadow">
                            <div className="text-3xl font-sans font-bold text-center text-slate-700 truncate">
                                $ 1,400
                            </div>
                            <div className="text-lg font-medium text-center text-gray-400 truncate">
                                This month death's
                            </div>
                            <Chart />
                        </div>
                    </div>
                    <div className="grid grid-rows-5 grid-flow-col mt-3 gap-3">
                        <div className="row-span-1 w-full px-4 py-5 mx-3 bg-white rounded-md shadow">
                            <div className="inline text-xl font-sans text-center text-slate-800">
                                Hospital survey
                            </div>
                            <Line />
                        </div>
                        <div className="row-span-1 col-span-5 w-full px-4  py-5 mx-3 bg-white rounded-md shadow">
                            <div className="text-md font-sans text-left text-slate-700">
                                <table className="table-auto w-full h-full">
                                    <thead className='border-collapse border border-slate-500 bg-red-600'>
                                        <tr>
                                        <th>Song</th>
                                        <th>Artist</th>
                                        <th>Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                        <td>Malcolm Lockyer</td>
                                        <td>1961</td>
                                        </tr>
                                        <tr>
                                        <td>Witchy Woman</td>
                                        <td>The Eagles</td>
                                        <td>1972</td>
                                        </tr>
                                        <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                        </tr>
                                        <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
           
        </div>
    </div>
  )
}

export default Dashboard
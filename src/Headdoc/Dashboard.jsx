import React from 'react'
import Nav from '../Headdoc/Nav'
import Sidebar from '../Headdoc/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className='bg-blue-50'>
        <div class="flex-1 flex flex-col">
            <nav>
                <Nav />
            </nav>
            <div class="flex h-screen">
                <Sidebar />
                
                <main class="flex-1 p-4">
                    <h2 className="text-3xl font-medium font-bold text-slate-700 mb-2">
                        Dashboard
                    </h2>
                    <h2 className="text-sm font-sans text-gray-500 mb-8">
                        Home / Dashboard
                    </h2>
                    <div className="grid grid-cols-2 mb-6 mx-4 gap-6">
                        <div className="w-full px-4 py-5 bg-white rounded-md shadow flex items-center justify">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="w-20 h- text-sky-500 ml-20">
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" 
                                />
                            </svg>
                            <div className="mt-1 text-5xl text-center font-semibold text-slate-700">
                                520
                            </div>
                            <div className="text-lg font-medium text-center text-gray-400 truncate">
                                Doctors
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-md shadow">
                            <div className="mt-1 text-5xl text-center font-semibold text-slate-700">
                                6789
                            </div>
                            <div className="text-lg font-medium text-center text-gray-400 truncate">
                                Nurses
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white  rounded-md shadow">
                            <div className="mt-1 text-5xl text-center font-semibold text-slate-700">
                                Total Orders
                            </div>
                            <div className="text-lg font-medium text-center text-gray-400 truncate">
                            20k
                            </ div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white  rounded-md shadow">
                            <div className="mt-1 text-5xl text-center font-semibold text-slate-700">
                                Total Orders
                            </div>
                            <div className="text-lg font-medium text-center text-gray-400 truncate">
                            20k
                            </ div>
                        </div>
                    </div>
                    <div className="grid grid-cols mb-6 px-4 gap-4">
                        <div className="w-full px-5 py-3 bg-white rounded-md shadow">
                            <div className="text-2xl font-medium text-slate-800 truncate">
                                Patient
                            </div>
                            <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8'/>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>

    </div>
  )
}

export default Dashboard
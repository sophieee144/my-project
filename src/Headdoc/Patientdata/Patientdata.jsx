import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Sidebar from '../Sidebar/Sidebar'


const Manaccounts = () => {
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
                        Patient data
                    </h2>
                    
                    <div className="grid grid-cols-1 mb-8 mx-4">
                        <div className="w-full px-5 py-3 bg-white rounded-md shadow">
                            <div className="text-2xl font-medium text-slate-800 truncate">
                            
                            </div>
                            <h2 className="text-sm font-sans text-gray-500 mb-4">
                            1.250 registered
                            </h2>
                            
                            <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-6'/>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Manaccounts
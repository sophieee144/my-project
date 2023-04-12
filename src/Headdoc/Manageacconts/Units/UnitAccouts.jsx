import React from 'react'
import DoctorAccount from '../Doctors/DoctorAccounts'
import UnitTabla from '../Units/UnitTable'
import Sidebar from '../../Sidebar/Sidebar'
import Nav from '../../Nav'
import { Link } from 'react-router-dom'
import UnitTable from '../Units/UnitTable'
// import Map from '../../Map'

const UnitAccouts = () => {
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
                        Units
                    </h2>
                    <div className="text-sm font-sans text-gray-500 mb-8">
                    <Link to={"/hdoc"} className="underline hover:text-indigo-700">Home</Link>
                        /<Link to={"/hdoc"} className="underline hover:text-indigo-700">Manage Account</Link> / 
                        Units
                    </div>
                </div>
                <div className="grid grid-cols-1 mb-8 mx-2 gap-3">
                    <div className="w-full px-4 py-5 bg-white rounded-md shadow">
                        <div className="inline text-xl font-sans text-center text-slate-800">
                            Unit table
                        </div>
                        <hr className='my-4 mx- border-slate-200'/>
                        <UnitTable />
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-md shadow">
                        <div className="inline text-xl font-sans text-center text-slate-800">
                           Map
                        </div>
                        <hr className='my-4 mx- border-slate-200'/>

                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
  )
}

export default UnitAccouts
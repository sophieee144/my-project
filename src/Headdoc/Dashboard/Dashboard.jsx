import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Sidebar from '../Sidebar/Sidebar'

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
                    <div className="grid grid-cols-2 mb-6 mx-4 gap-6 py-8">
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
                    <div className="grid mb-6 px-4">
                        <div className="w-full px-5 py-3 ml-4 bg-white rounded-md shadow">
                            <div className="text-2xl font-medium text-slate-800 truncate">
                                Patient
                            </div>
                            <h2 className="text-sm font-sans text-gray-500 mb-4">
                            1.232.150 registered users
                            </h2>
                            <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-6'/>
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-300 dark:bg-blue-500">
                                            <tr>
                                            <th scope="col" className="px-6 py-4">id</th>
                                            <th scope="col" className="px-6 py-4">First</th>
                                            <th scope="col" className="px-6 py-4">Last</th>
                                            <th scope="col" className="px-6 py-4">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                            <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                            <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                            <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                            <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                            <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                            <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        </div>
                                    </div>
                                </div>
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
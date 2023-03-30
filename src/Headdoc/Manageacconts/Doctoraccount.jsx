import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Sidebar from '../Sidebar/Sidebar'
import Btncompte from './BtnCompte'
import DeleteIcon from './DeleteIcon'

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
                        Manage doctors accounts
                    </h2>
                    <div className="text-sm font-sans text-gray-500 mb-8">
                        <Link to={"/hdoc"} className="underline">Home</Link>
                        /<Link to={"/hdoc"} className="underline">Manage Account</Link> / 
                        Doctors
                    </div>
                    {/* <h2 className="text-sm font-sans text-gray-500 mb-8">
                        Home / Dashboard
                    </h2> */}
                    
                    <div className="grid grid-cols-1 mb-8 mx-4">
                        <div className="w-full px-5 py-3 bg-white rounded-md shadow">
                            <div className="text-2xl font-medium text-slate-800 truncate">
                                Doctors
                            </div>
                            <h2 className="text-sm font-sans text-gray-500 mb-4">
                            1.250 registered
                            </h2>

                            <Btncompte>Create account</Btncompte>
                            <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-6'/>
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden rounded-md">
                                        <table className="min-w-full text-center text-sm font-sans">
                                        <thead className="bg-neutral-800 text-white dark:border-neutral-300 dark:bg-indigo-900">
                                            <tr>
                                            <th scope="col" className="px-6 py-4">id</th>
                                            <th scope="col" className="px-6 py-4">Name</th>
                                            <th scope="col" className="px-6 py-4">Surname</th>
                                            <th scope="col" className="px-6 py-4">Email</th>
                                            <th scope="col" className="px-6 py-4">Phone</th>
                                            <th scope="col" className="px-6 py-4">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-300">
                                            <td className="whitespace-nowrap px-6 py-4">1</td>
                                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                            <td className="whitespace-nowrap px-6 py-4">222222</td>
                                            <td className="whitespace-nowrap px-6 py-4 space-x-2">
                                                <button className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
                                                        />
                                                    </svg>  
                                                </button>
                                                <DeleteIcon>
                                                <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                                                        />
                                                    </svg>
                                                </DeleteIcon>
                                                {/* <button className="bg-rose-500 text-white py-2 px-2 rounded hover:bg-rose-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                                                        />
                                                    </svg>
                                                </button> */}
                                            </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-300">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                            <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                            <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                            <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                            <td className="whitespace-nowrap px-6 py-4">555555</td>
                                            <td className="whitespace-nowrap px-6 py-4 space-x-2">
                                            <button className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
                                                        />
                                                    </svg>  

                                                    </button>
                                                    <button className="bg-rose-500 text-white py-2 px-2 rounded hover:bg-rose-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-300">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                            <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                            <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                            <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                            <td className="whitespace-nowrap px-6 py-4">999999</td>
                                            <td className="whitespace-nowrap px-6 py-4 space-x-2">
                                            <button className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
                                                        />
                                                    </svg>  

                                                    </button>
                                                    <button className="bg-rose-500 text-white py-2 px-2 rounded hover:bg-rose-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-300">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                                            <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                            <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                            <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                            <td className="whitespace-nowrap px-6 py-4">999999</td>
                                            <td className="whitespace-nowrap px-6 py-4 space-x-2">
                                            <button className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
                                                        />
                                                    </svg>  
                                                    </button>
                                                    <button className="bg-rose-500 text-white py-2 px-2 rounded hover:bg-rose-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-300">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">5</td>
                                            <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                            <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                            <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                            <td className="whitespace-nowrap px-6 py-4">999999</td>
                                            <td className="whitespace-nowrap px-6 py-4 space-x-2">
                                            <button className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
                                                        />
                                                    </svg>  

                                                    </button>
                                                    <button className="bg-rose-500 text-white py-2 px-2 rounded hover:bg-rose-400 duration-500">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="w-5 h-5 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
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

export default Manaccounts
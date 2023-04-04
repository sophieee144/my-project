import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../Nav'
import Sidebar from '../../Sidebar/Sidebar'
import Btncompte from '../BtnCompte'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Tooltip, Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
 

const Manaccounts = () => {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
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
                    <div className="text-sm font-sans text-indigo-500 mb-8">
                        <Link to={"/hdoc"} className="underline text-indigo-400 hover:text-indigo-700">Home</Link>
                        /<Link to={"/hdoc"} className="underline text-indigo-400 hover:text-indigo-700">Manage Account</Link> / 
                        Doctors
                    </div>
                    {/* <h2 className="text-sm font-sans text-gray-500 mb-8">
                        Home / Dashboard
                    </h2> */}
                     <Fragment>
                    <div className="grid grid-cols-1 mb-8 mx-4">
                        <div className="w-full px-5 py-3 bg-white rounded-md shadow">
                            <div className="text-2xl font-medium text-slate-800 truncate">
                                Doctors
                            </div>
                            <h2 className="text-sm font-sans text-gray-500 mb-6">
                                1.250 registered
                            </h2>
                            <Btncompte>Create account</Btncompte>
                            <div className="w-60 mt-8">
                                <Select
                                    label="Search by section"
                                    animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                    }}
                                   className='rounded-md hover:border-indigo-600'
                                >
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                            <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-300'/>
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
                                            <Tooltip content="More info" placement="left-end" className='text-gray-700 bg-gray-400'>
                                                <Link to={"/docinformation"}>
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
                                                </button></Link>
                                            </Tooltip>
                                                <button onClick={() => setOpen(true)} ref={cancelButtonRef} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600 duration-500">
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
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                            <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                            <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                            <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                            <td className="whitespace-nowrap px-6 py-4">555555</td>
                                            <td className="whitespace-nowrap px-6 py-4 space-x-2">
                                            <Tooltip content="More info" placement="left" className='text-gray-700 bg-gray-400'>
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
                                            </Tooltip>
                                                    <button onClick={() => setOpen(true)} ref={cancelButtonRef} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600 duration-500">
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
                                            <Tooltip content="More info" placement="left" className='text-gray-700 bg-gray-400'>
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
                                            </Tooltip>
                                                    <button onClick={() => setOpen(true)} ref={cancelButtonRef} className="bg-rose-500 text-white py-2 px-2 rounded hover:bg-rose-400 duration-500">
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
                                                    <button onClick={() => setOpen(true)} ref={cancelButtonRef} className="bg-rose-500 text-white py-2 px-2 rounded hover:bg-rose-400 duration-500">
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
                    </Fragment>
                    <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <div className="fixed inset-0 backdrop-blur-md bg-white/30 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Delete account
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                        Are you sure you want to delete this account? All of his data will be permanently
                                        removed. This action cannot be undone.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    onClick={() => setOpen(false)}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    onClick={() => setOpen(false)}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                                </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition.Root>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Manaccounts
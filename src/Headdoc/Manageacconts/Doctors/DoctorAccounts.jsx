import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../Nav'
import Sidebar from '../../Sidebar/Sidebar'
import Btncompte from '../BtnCompte'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Tooltip, Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import DocTable from './DocTable'
import ValideModal from '../../ValideModal'
 

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
                    {open && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Well done!</strong>
                            <span className="block sm:inline"> Aww yeah, you successfully add account to your data.</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <button
                                    type="button"
                                    className="text-green-900 hover:text-green-700"
                                    onClick={() => setOpen(false)}
                                >
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </span>
                        </div>
                    )}
                    <h2 className="text-3xl font-medium font-bold text-slate-700 mb-2">
                        Doctors accounts
                    </h2>
                    <div className="text-sm font-sans text-gray-500 mb-8">
                        <Link to={"/hdoc"} className="underline hover:text-indigo-700">Home</Link>
                        /<Link to={"/hdoc"} className="underline hover:text-indigo-700">Manage Account</Link> / 
                        <Link to={"/unit"} className="underline hover:text-indigo-700">Units</Link>/
                        Doctors accounts
                    </div>
                    <Fragment>
                    <div className="grid grid-cols-1 mb-8 mx-2">
                        <div className="w-full px-5 py-3 bg-white rounded-md shadow">
                            <div className='grid grid-cols-6'>
                                <div className="text-2xl font-sans text-slate-800 truncate">
                                    Doctor table
                                </div>
                                <div className='col-end-7 mt-3'>
                                    <Btncompte>
                                        Create account
                                    </Btncompte>
                                </div>
                            </div>
                            
                            {/* <div className="w-72 mt-6">
                                <Select label="Select Version">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div> */}
                            <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-300'/>
                            <div className="flex flex-col">
                                <DocTable />
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
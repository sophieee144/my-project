import React from "react";
import { Link } from "react-router-dom";
import { Fragment, useRef, useState } from 'react'
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
import Delete from "../../DeleteModal";

export default function DocTable() {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const [show, setShow] = React.useState(false);
    const handleOpen = () => setShow((cur) => !cur);

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="flex justify-between py-3 pl-2">
                    <div className="relative max-w-xs">
                        <label htmlFor="hs-table-search" className="sr-only">
                            Search
                        </label>
                        <input
                            type="text"
                            name="hs-table-search"
                            id="hs-table-search"
                            className="block w-full p-2 pl-10 text-sm border-gray-200 rounded-full bg-slate-50 "
                            placeholder="Search here . . ."
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg
                                className="h-3.5 w-3.5 text-gray-600"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <button className="relative z-0 inline-flex text-sm rounded-full shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                                <span className="relative inline-flex mr-2 items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-indigo-800 hover:text-gray-100 sm:py-2">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="hidden sm:block">
                                        Filters
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-indigo-50">
                                <tr>
                                    <th scope="col" className="py-3 pl-4">
                                        <div className="flex items-center h-5">
                                            
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Phone
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        more infos
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="py-3 pl-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor="checkbox"
                                                className="sr-only"
                                            >
                                                Checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        1
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Jone Doe
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        0854432343
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <Link to={"/editinfo"} className="text-green-500 hover:text-green-700"> Edit</Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <button onClick={() => setOpen(true)} className="text-red-500 hover:text-red-700"> Delete</button>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <Link to={"/docinformation"} className="flex flex-row-reverse text-blue-500 hover:text-blue-700">
                                           
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                strokeWidth="1.5" 
                                                stroke="currentColor" 
                                                className="w-4 h-full pt-1 ml-1"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                                                />
                                            </svg>
                                            Learn more
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 pl-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor="checkbox"
                                                className="sr-only"
                                            >
                                                Checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        1
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Jone Doe
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        0987654432
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <button onClick={() => setShow(true)} ref={cancelButtonRef} className="text-green-500 hover:text-green-700"> Edit</button>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <Link className="text-red-500 hover:text-red-700"> Delete</Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <Link className="flex flex-row-reverse text-blue-500 hover:text-blue-700">
                                           
                                           <svg 
                                               xmlns="http://www.w3.org/2000/svg" 
                                               fill="none" 
                                               viewBox="0 0 24 24" 
                                               strokeWidth="1.5" 
                                               stroke="currentColor" 
                                               className="w-4 h-full pt-1 ml-1"
                                           >
                                               <path 
                                                   strokeLinecap="round" 
                                                   strokeLinejoin="round" 
                                                   d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                                               />
                                           </svg>
                                           Learn more
                                       </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            { show && (
                // <React.Fragment>
                //     <Button onClick={handleOpen}>Sign In</Button>
                //     <Dialog
                //         size="xs"
                //         open={show}
                //         handler={handleOpen}
                //         className="bg-transparent shadow-none"
                //     >
                //         <Card className="mx-auto w-full max-w-[24rem]">
                //          <CardHeader
                //             variant="gradient"
                //             color="blue"
                //             className="mb-4 grid h-28 place-items-center"
                //         >
                //             <Typography variant="h3" color="white">
                //                 Sign In
                //             </Typography>
                //         </CardHeader>
                //         <CardBody className="flex flex-col gap-4">
                //             <Input label="Email" size="lg" />
                //             <Input label="Password" size="lg" />
                //             <div className="-ml-2.5">
                //                 <Checkbox label="Remember Me" />
                //             </div>
                //         </CardBody>
                //         <CardFooter className="pt-0">
                //             <Button variant="gradient" onClick={handleOpen} fullWidth>
                //                 Sign In
                //                 </Button>
                //                 <Typography variant="small" className="mt-6 flex justify-center">
                //                 Don&apos;t have an account?
                //                 <Typography
                //                     as="a"
                //                     href="#signup"
                //                     variant="small"
                //                     color="blue"
                //                     className="ml-1 font-bold"
                //                     onClick={handleOpen}
                //                 >
                //                     Sign up
                //                 </Typography>
                //                 </Typography>
                //             </CardFooter>
                //             </Card>
                //         </Dialog>
                //     </React.Fragment>
                <div className="fixed inset-0 backdrop-blur-sm bg-white/30 transition-opacity">
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="flex bg-white px-16 py-14 rounded-md text-center">
                            <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-center">
                                <div className="absolute text-center top-0 bg-red-600 rounded-lg py-5"> 
                                    Sign up
                                </div>
                                <h3 className="text-base font-semibold leading-6 text-gray-900">
                                    Delete account
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to delete this account? All of his data will be permanently
                                        removed. This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                                <button
                                    type="button"
                                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                    onClick={() => setShow(false)}   
                                >
                                    Delete
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    )}
                    {open && (
                        <Delete />
                    )}
        </div>
    );
}
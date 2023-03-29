import React from "react";
import { Link } from 'react-router-dom'
import { Alert, Button, Typography } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Nav from '../Nav'
import Sidebar from '../Sidebar/Sidebar'

const Manaccounts = () => {
    const [show, setShow] = React.useState(true);
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
                        Managa doctors accounts
                    </h2>
                    <div className="text-sm font-sans text-gray-500 mb-8">
                        <Link to={"/hdoc"} className="underline">Home</Link>
                        / Manage accounts / Doctors /
                        <Link to={"/register"} className="underline">Create account</Link>
                    </div>
                    {/* <h2 className="text-sm font-sans text-gray-500 mb-8">
                        Home / Dashboard
                    </h2> */}
                    
                    <div className="grid grid-cols-1 mb-8 mx-4">
                        <div className="w-full px-5 py-3 bg-white rounded-md shadow">
                            <React.Fragment>
                            {!show && (
                            <div onClick={() => setShow(true)}>
                                <div className="text-2xl font-medium text-slate-800 truncate">
                                    Doctors accounts
                                </div> 
                                <h2 className="text-sm font-sans text-gray-500 mb-4">
                                    1.250 registered
                                </h2>
                            </div>)}
                           <div className="relative flex flex-col justify-center overflow-hidden">
                                <div className="w-full p-6 mb-4 m-auto">
                                {!show && (
                            <div onClick={() => setShow(true)}>
                                    <h1 className="text-4xl font-semibold text-center text-blue-700 pb-4">
                                        Log in
                                    </h1>
                                    <div className="grid grid-cols-2 mb-6 mx-4 gap-12 py-8">
                                       
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-indigo-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            />
                                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-indigo-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-900 peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Name
                                            </label>
                                        </div>
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-indigo-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            />
                                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-indigo-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-900 peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Surname
                                            </label>
                                        </div>
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-indigo-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            />
                                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-indigo-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-900 peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Birth day
                                            </label>
                                        </div>
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-indigo-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            />
                                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-indigo-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-900 peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Phone
                                            </label>
                                        </div>
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-indigo-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            />
                                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-indigo-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-900 peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Email
                                            </label>
                                        </div>
                                        <div className="flex gap-10">
                                        <div className="inline-flex items-center">
                                            <label
                                            className="relative flex cursor-pointer items-center rounded-full p-3"
                                            htmlFor="html"
                                            data-ripple-dark="true"
                                            >
                                            <input
                                                id="html"
                                                name="type"
                                                type="radio"
                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                            />
                                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                >
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </div>
                                            </label>
                                            <label
                                            className="mt-px cursor-pointer select-none font-sans text-gray-700"
                                            htmlFor="html"
                                            >
                                            Female
                                            </label>
                                        </div>
                                        <div className="inline-flex items-center">
                                            <label
                                            className="relative flex cursor-pointer items-center rounded-full p-3"
                                            htmlFor="react"
                                            data-ripple-dark="true"
                                            >
                                            <input
                                                id="react"
                                                name="type"
                                                type="radio"
                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                                            />
                                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                >
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </div>
                                            </label>
                                            <label
                                            className="mt-px cursor-pointer select-none font-sans text-gray-700"
                                            htmlFor="react"
                                            >
                                            Male
                                            </label>
                                            </div>
                                        </div>
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input
                                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-indigo-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            />
                                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-indigo-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-900 peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Grade
                                            </label>
                                        </div>
                                    </div>
                                    </div>)}
                                    
                                    
                                        {!show && (
                                            // <Button
                                            // color="green"
                                            // className="bg-indigo-700 text-white py-2 px-6 rounded lg:ml-8 hover:bg-indigo-500 duration-500"
                                            // onClick={() => setShow(true)}
                                            // >
                                            // Create account
                                            // </Button>
                                            <Link to={"/register"} className="cursor-pointer justify-end justify-left bg-indigo-700 text-white py-2 px-6 rounded hover:bg-indigo-500 duration-500"
                                            onClick={() => setShow(true)}
                                            >
                                                Valider
                                            </Link>
                                        )}
                                        <Alert
                                            show={show}
                                            color="green"
                                            className="max-w-screen-md ml-24 text-gray-100 bg-green-500"
                                            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
                                            dismissible={{
                                            onClose: () => setShow(false),
                                            }}
                                        >
                                            <Typography variant="h5">
                                            Success
                                            </Typography>
                                            <Typography className="mt-2 font-normal">
                                            The account is added successfuly
                                            </Typography>
                                        </Alert>
                                   
                                    {/* <div className="cursor-pointer justify-end justify-left">
                                        <Link to={"/register"} className="bg-indigo-700 text-white py-2 px-6 rounded lg:ml-8 hover:bg-indigo-500 duration-500">
                                            Create account
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                            </React.Fragment>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Manaccounts
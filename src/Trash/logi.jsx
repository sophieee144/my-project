import React from 'react'

const logi = () => {
  return (
    <div>
        <div className="mx-auto container flex items-center" id="nav">
                    <div className="w-full pt-2 p-4">

                        <div className="mx-auto md:p-6 md:w-1/2">
                            <div className="flex flex-wrap justify-between">
                                <h1 className="text-4xl text-indigo-400 hover:text-blue-500 underline transition duration-500 p-7">
                                    <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
                                    Sign-in
                                </h1>
                                <a href="/" className="mt-14 text-indigo-400 hover:text-blue-600 transition duration-500">
                                    <svg 
                                        className=" w-6 h-6 inline-block align-bottom" 
                                        fill="none" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                        </path>
                                    </svg>
                                    Back to Home
                                    <i className="fas fa-chevron-circle-left fa-fw"></i>
                                </a>
                            </div>

                            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <form method="POST" action="#login">
                                    <div className="mb-8">
                                        <label for="username" className="block text-gray-700 text-sm font-bold mb-2">
                                            Username
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <svg 
                                                    className="h-5 w-5 text-gray-400" 
                                                    fill="none" 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="2" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path 
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <input id="username" className="block pr-10 shadow appearance-none border-2 border-blue-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-500 ease-in-out" placeholder="you@example.com" />
                                        </div>
                                        <strong className="text-blue-500 text-xs italic">username is require</strong>
                                    </div>

                                    <div className="mb-8">
                                        <label for="password" className="block text-gray-700 text-sm font-bold mb-2">
                                            Password
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <svg 
                                                    className="h-5 w-5 text-gray-400" 
                                                    fill="none" 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="2" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path 
                                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <input name="password" id="password" type="text" className="block pr-10 shadow appearance-none border-2 border-blue-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-500 ease-in-out"/>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <label className="block text-blue-500 font-bold" for="remember">
                                                    <input className="leading-tight" type="checkbox" id="remember" name="remember"/>
                                                    <span className="text-sm pl-2">
                                                        remember me
                                                    </span>
                                                </label>
                                            </div>
                                            <div>
                                                <a className="text-sm text-blue-500 hover:text-blueorange-800" href="#password-request">
                                                    forgot password
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <hr/>

                                    <div className="mb-0 mt-6 text-center">
                                        <button className="w-96 transition duration-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                            Login
                                        </button>
                                    </div>
                                    
                                    {/* <div className="mt-8">
                                        <p className="text-sm">
                                            no account
                                            <a className="font-bold text-sm text-blue-500 hover:text-orange-800" href="/registerdoc">
                                                sign up
                                            </a>
                                        </p>
                                    </div> */}
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default logi
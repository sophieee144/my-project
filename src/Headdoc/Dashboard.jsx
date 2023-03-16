import React from 'react'

const Dashboard = () => {
  return (
    <div>
         <div className="container mx-8 mt-12">
                <div className="grid grid-cols-3 mb-6 gap-4">
                    <div className="w-full px-4 py-5 bg-slate-200 rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-slate-200 rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            $ 450k
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-slate-200  rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            20k
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 mb-6">
                    <div className="flex flex-row px-4 py-5 bg-slate-200 rounded-lg shadow">
                        <div className="text-xl font-medium text-gray-500">
                            Patient
                        </div>
                    </div>
                </div>
                <div className="relative pl-16 w-96">
                            <span className="absolute inset-y-0 left-0 flex items-center py-4 pl-20">
                                <button
                                    type="submit"
                                    className="p-2 focus:outline-none focus:ring text-gray-700 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-grey"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                name="Search"
                                placeholder="Search here..."
                                className="font-sans w-full py-2 pl-14 text-sm rounded-full focus:outline-none bg-slate-300"
                            />
                        </div>
        <table className="table-auto space-y-3">
        <thead>
            <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            </tr>
            <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
            </tr>
            <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            </tr>
        </tbody>
        </table>
            </div> 
    </div>
  )
}

export default Dashboard
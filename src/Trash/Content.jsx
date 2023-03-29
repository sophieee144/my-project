import React from 'react'
import Nav from '../Headdoc/Nav'
import Sidebar from '../Headdoc/Sidebar/Sidebar'

const Content = () => {
  return (
    <div>
        <div className="flex h-screen">
        <Sidebar />
            <div className="flex-1 flex flex-col">
                <nav>
                    <Nav />
                </nav>
                <main className="flex-1 p-4">
                    <h2 className="text-2xl font-bold text-gray-200 mb-6">
                        Dashboard
                    </h2>
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
                            </ div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mb-6 gap-4">
                        <div className="w-full px-4 py-5 bg-slate-200 rounded-lg shadow">
                            <div className="text-2xl font-medium text-gray-500 truncate">
                                Patient
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    </div>
  )
}

export default Content
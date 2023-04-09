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
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
            </div>
        </div>

    </div>
  )
}

export default Content
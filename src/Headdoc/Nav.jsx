import React from "react";
import { Fragment, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { Dialog } from '@headlessui/react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Search from './Search'

function Navbar() {
  const [open, setOpen] = useState(false)
  const panelButtonRef = useRef(null)
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setShowNotification(true);
    setButtonClicked(true);
  };
  return (
    <div>
      <nav className="bg-gray-800 flex ">
        <div className="max-w-7xl px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center">
                <a>
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                </a>
              <span className="text-2xl font-semibold pl-4 dark:text-white">
                DETECT ++
              </span>
            </div>
            <Search></Search>
            <div className="inline flex justify-arround">
            <Fragment>
              <button type="button" onClick={() => setOpen(true)}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-6 h-6 text-gray-100"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" 
                  />
                </svg>
              </button>
            </Fragment>
            <Link >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-6 h-6 text-gray-100"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" 
                />
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </Link>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                          as={Fragment}
                          enter="transform transition ease-in-out duration-500 sm:duration-700"
                          enterFrom="translate-x-full"
                          enterTo="translate-x-0"
                          leave="transform transition ease-in-out duration-500 sm:duration-700"
                          leaveFrom="translate-x-0"
                          leaveTo="translate-x-full"
                        >
                          <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-in-out duration-500"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in-out duration-500"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                <button
                                  type="button"
                                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                            </Transition.Child>
                            <div className="flex h-full flex-col overflow-y-scroll bg-slate-800 py-6 shadow-xl">
                              <div className="px-4 sm:px-6">
                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                 <div className="flex justify-evenly text-slate-200 text-sm text-sans">
                                    <Link className="hover:text-indigo-500 hover:underline underline-offset-4 hover:underline decoration-2">
                                      Notification
                                    </Link>
                                    <Link className="hover:text-indigo-500 hover:underline underline-offset-4 hover:underline decoration-2">
                                      Inbox
                                    </Link>
                                    <Link className="hover:text-indigo-500 hover:underline underline-offset-4 hover:underline decoration-2">
                                      profile
                                    </Link>
                                    <Link className="hover:text-indigo-500 hover:underline underline-offset-4 hover:underline decoration-2">
                                      Setting
                                    </Link>
                                  </div>
                                </Dialog.Title>
                              </div>
                              <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                
                              </div>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

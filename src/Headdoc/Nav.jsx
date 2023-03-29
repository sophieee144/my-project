import React, { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { MapPinIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
 
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openPopover, setOpenPopover] = React.useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  return (
    <div>
      <nav className="bg-gray-800 ">
        <div className="max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ml-4">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                
              </div>
              <span className="self-center text-2xl font-semibold pl-3 dark:text-white">
                DETECT ++
              </span>
              
              <div className="relative pl-24 w-96">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4 pl-28">
                            <button
                                type="submit"
                                className="p-1 focus:outline-none focus:ring text-gray-500 "
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
                            className="font-sans w-full py-2 pl-14 text-md rounded-lg focus:outline-none bg-slate-50"
                        />
              </div>
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100 absolute right-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                 </svg>
              </a>
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-6 h-6 text-gray-100 absolute right-10"
                    strokeWidth={2}
                >
                  <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" 
                  />
                </svg>
              </a>

              <Popover open={openPopover} handler={setOpenPopover} className="ml-10">
                <PopoverHandler {...triggers}>
                  <Button variant="text">Profile Info</Button>
                </PopoverHandler>
                <PopoverContent {...triggers} className="max-w-[24rem]">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <Avatar
                      size="xxl"
                      width={56}
                      variant="circular"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="candice wu"
                    />
                    <Button
                      variant="gradient"
                      color="blue"
                      size="md"
                      className="font-medium capitalize"
                    >
                      Follow
                    </Button>
                  </div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2 flex items-center gap-2 font-medium"
                  >
                    <span>Candice Wu</span> •{" "}
                    <a href="#" className="text-sm text-blue-gray-700">
                      @canwu
                    </a>
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    Frontend Developer • Major interest in Web Development: motivated to
                    achieve measurable results, to deepen my knowledge and improve my
                    skills.
                  </Typography>
                  <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center gap-1 text-xs font-normal"
                    >
                      <MapPinIcon strokeWidth={2} className="-mt-0.5 h-3.5 w-3.5" />
                      United Kingdom
                    </Typography>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="gray"
                      className="flex items-center gap-1 text-xs font-normal"
                    >
                      <BuildingOffice2Icon
                        strokeWidth={2}
                        className="-mt-0.5 h-3.5 w-3.5"
                      />
                      Material Tailwind
                    </Typography>
                  </div>
                </PopoverContent>
              </Popover>
              {/* <div className="hidden md:block ml-64">
                <div className="ml-10 flex items-baseline space-x-4">
                  
                  <Link to={"/"} className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                 
                  <Link to={"/calendar"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Calendar
                  </Link>

                  <Link to={"/reports"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Reports
                  </Link>

                  <Link to={"/contact"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>

                  <Link to={"/about"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>

                </div>
              </div> */}
            </div>
            {/* <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div> */}
          </div>
        </div>

        {/* <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                
                <Link to={"/"} className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>

                <Link to={"/calendar"} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Calendar
                </Link>

                <Link to={"/reports"}  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Reports
                </Link>

                <Link to={"/contact"}  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </Link>

                <Link to={"/about"}  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </Link>

              </div>
            </div>
          )}
        </Transition> */}
      </nav>
    </div>
  );
}

export default Nav;

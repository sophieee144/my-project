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
import femaledoctor from '../assets/femaledoctor.jpg'
import SearchComponent from "./Search";

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
        <div className="max-w-full">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ml-4">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                
              </div>
              <span className="text-2xl font-semibold pl-3 dark:text-white">
                DETECT ++
              </span>
              
              {/* <div className="relative pl-24">
                <form className="w-full max-w-sm">
                  <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search here ..." aria-label="Search"/>
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                      Search
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                      Cancel
                    </button>
                  </div>
                </form>
              </div> */}
              <SearchComponent />
              <a
                href="#"
                className="flex justify-end items-center rounded-md"
              >
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
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
                className="flex items-center rounded-md"
              >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-6 h-6 text-gray-100"
                    strokeWidth={2}
                >
                  <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" 
                  />
                </svg>
              </a>
              <Popover open={openPopover} handler={setOpenPopover}>
                <PopoverHandler {...triggers}>
                  <Button variant="text">
                    <Avatar
                      className="rounded-full"
                      width={56}
                      variant="circular"
                      src={femaledoctor} 
                      alt="Example Image" 
                    />
                  </Button>
                </PopoverHandler>
                <PopoverContent {...triggers} className="max-w-[18rem] max-h-[28rem]">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2 flex items-center gap-2 font-medium"
                  >
                    <span>Sandy bell</span> •{" "}
                    <a href="#" className="text-sm text-blue-gray-700">
                      @sophie
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
                      Algeria la3ina
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

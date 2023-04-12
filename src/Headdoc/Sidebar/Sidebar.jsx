import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { LinkOffTwoTone } from "@mui/icons-material";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

export default function Sidebar() {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Fragment>
        <div className="flex overflow-y-auto">
            <div className="h-screen p-3 bg-white shadow duration-300">
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-2 text-sm text-gray-700">
                            <li className="hover:bg-gray-700 hover:text-gray-100 px-2 rounded-md">
                                <Link to={"/hdoc"} className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                                    <AccordionHeader onClick={() => handleOpen(1)} className="text-sm hover:bg-gray-700 hover:text-gray-100 pl-1.5 pt-0.5 pb-0.5 rounded-md">
                                        <div className="flex items-center p-2 space-x-3 rounded-md">
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                    <path 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" 
                                                    />
                                            </svg>

                                            <span>Manage accounts</span> 
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody className="pl-12 space-y-2 font-sans text-md">
                                        <Link to={"/unit"} className="block text-gray-700 hover:text-indigo-500 hover:font-bold">
                                            Units
                                        </Link>
                                        <Link to={"/doc"} className="block text-gray-700 hover:text-indigo-500 hover:font-bold">
                                            Laboratories
                                        </Link>
                                        <Link to={"/doc"} className="block text-gray-700 hover:text-indigo-500 hover:font-bold">
                                            Laboratories
                                        </Link>
                                    </AccordionBody>
                                </Accordion>
                            </li> 
                        
                            <li className="hover:bg-gray-700 hover:text-gray-100 px-2 rounded-md">
                                <Link to={"/patientdata"} className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" 
                                        />
                                   </svg>

                                    <span>Patient data</span> 
                                </Link>
                            </li>
                            <li className="hover:bg-gray-700 hover:text-gray-100 px-2 rounded-md">
                                
                                <Link to={"/charts"} className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" 
                                        />
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" 
                                        />
                                    </svg>

                                    <span>Chart</span>
                                </Link>
                            </li>
                            <li className="hover:bg-gray-700 hover:text-gray-100 px-2 rounded-md">
                                
                                <Link to={"/inbox"} className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" 
                                        />
                                    </svg>

                                    <span>Inbox</span>
                                </Link>
                            </li>
                            <li className="hover:bg-gray-700 hover:text-gray-100 px-2 rounded-md">
                                
                                <Link to={"/help"} className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" 
                                            />
                                    </svg>

                                    <span>Help</span>
                                </Link>
                            </li>
                            <hr/>
                            <li className="hover:bg-gray-700 hover:text-gray-100 px-2 rounded-md">
                                
                                <Link to={"/logout"} className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    </Fragment>
    );
}
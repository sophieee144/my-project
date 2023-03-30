import React from 'react'
import { Link } from 'react-router-dom'

const Btncompte = (props) => {
  return (
       
    <div className="cursor-pointer justify-end justify-left">
       {/* <a
          href="/login"
              className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
          >
            {props.children}
        </a> */}

        <Link to={"/deletemodal"} className="bg-rose-500 text-white py-2 px-2 rounded hover:bg-rose-400 duration-500">
          {props.children}
        </Link>
        
    </div>
  )
}

export default Btncompte
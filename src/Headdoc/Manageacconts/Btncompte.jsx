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

        <Link to={"/register"} className="bg-indigo-700 text-white py-2 px-6 rounded lg:ml-8 hover:bg-indigo-500 duration-500">
          {props.children}
        </Link>
        
    </div>
  )
}

export default Btncompte
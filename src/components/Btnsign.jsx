import React from 'react'
import { Link } from 'react-router-dom'

const Btnsign = (props) => {
  return (
       
    <div className="cursor-pointer flex justify-end justify-center">
       {/* <a
          href="/login"
              className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
          >
            {props.children}
        </a> */}

        <Link to={"/login"} className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
          {props.children}
        </Link>
        
    </div>
  )
}

export default Btnsign
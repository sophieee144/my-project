import React from 'react'
import { Link } from 'react-router-dom'

const Btncompte = (props) => {
  return (
       
    <span>
  
        <Link to={"/registerdoc"} className="bg-indigo-700 text-white py-3 px-5 rounded lg:ml-8 hover:bg-blue-900 duration-500">
          {props.children}
        </Link>
        
    </span>
  )
}

export default Btncompte
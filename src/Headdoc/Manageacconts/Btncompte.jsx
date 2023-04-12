import React from 'react'
import { Link } from 'react-router-dom'

const Btncompte = (props) => {
  return (
       
    <span>
  
        <Link to={"/registerdoc"} className="bg-indigo-700 text-white py-2 px-4 rounded lg:ml-8 hover:bg-white hover:text-indigo-700 hover:text-bold hover:border-solid border-2 border-indigo-700 duration-500">
          {props.children}
        </Link>
        
        
    </span>
  )
}

export default Btncompte
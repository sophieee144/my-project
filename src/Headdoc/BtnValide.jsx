import React from 'react'
import { Link } from 'react-router-dom'

const BtnValide = (props) => {
  return (
       
    <span>
  
        <button className="bg-indigo-700 text-white py-2 px-8 rounded lg:ml-8 hover:bg-white hover:text-indigo-700 hover:border-solid border-2 border-indigo-700 duration-500">
          {props.children}
        </button>
           
    </span>
  )
}

export default BtnValide
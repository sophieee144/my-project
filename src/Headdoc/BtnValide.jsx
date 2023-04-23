import React from 'react'
import { Link } from 'react-router-dom'

const BtnValide = (props) => {
  return (
       
    <span>
  
        <button className="bg-white text-indigo-700 py-2 px-8 rounded-full hover:bg-white hover:text-indigo-700 hover:border-solid border-2 border-indigo-700 duration-500">
          {props.children}
        </button>
           
    </span>
  )
}

export default BtnValide
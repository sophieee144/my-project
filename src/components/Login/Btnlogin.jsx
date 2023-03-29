import React from 'react'
import { Link } from 'react-router-dom'

const Btnlogin = (props) => {
  return (
    <div className="mt-6">
        {/* <a
        href="/hdoc"
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
            {props.children}
        </a> */}

        <Link to={"/hdoc"} className="text-center w-96 transition duration-500 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-28 rounded focus:outline-none focus:shadow-outline" type="submit">
          {props.children}
        </Link>
    </div>
  )
}

export default Btnlogin
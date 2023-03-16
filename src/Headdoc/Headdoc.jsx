import React from 'react'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Sidebar from './Sidebar/Sidebar'

const Headdoc = () => {
  return (
    <div>
        <Nav />
        <Sidebar />
        <Dashboard />
    </div>
  )
}

export default Headdoc
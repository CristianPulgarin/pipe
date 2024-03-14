import React from 'react'

import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        
       <NavLink
                to="/"
               
              >Home</NavLink>

<NavLink
                to="/about"
                className="p-1 text-gray-300 block hover:bg-yellow-500 hover:text-gray-900 text-sm mx-2"
              >
                Registrar rutina
              </NavLink>
    </div>
  )
}

export {Sidebar}

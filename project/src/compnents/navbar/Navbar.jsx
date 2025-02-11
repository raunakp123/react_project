import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div id='nav'>
       <ul>
        <NavLink to={'/'}><li>Home</li></NavLink>

        <NavLink to={'/manu'}><li>Manu</li></NavLink>
        <NavLink to={'/About'}><li>About</li></NavLink>

        <NavLink to={'/Contact'}><li>Contact</li></NavLink>

       </ul>
    </div>
  )
}

import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <NavLink to="login">Login</NavLink> &nbsp;
        <NavLink to="signup">Signup</NavLink> &nbsp;
        <Outlet/>
    </div>
  )
}

export default Navbar
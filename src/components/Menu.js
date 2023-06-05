import React from 'react'
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu_style">
      <NavLink  to="/">Home</NavLink>
      <NavLink  to="/about">About</NavLink>
      <NavLink  to="/user/shafaat/hussain">User</NavLink>
      <NavLink  to="/service">Service</NavLink>
      <NavLink  to="/contact">Contact</NavLink>
      <NavLink  to="/search">Search</NavLink>
    </div>
  )
}

export default Menu

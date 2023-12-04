import React from 'react';
import { Link } from 'gatsby';
import { navLink, activeNavLink, navigation, navBox } from './navigation.module.css'

const NavLink = ({ to, children }) => {
  return ( 
    <Link to={to} className={navLink} activeClassName={activeNavLink}>{children}</Link>
  )
}

const Navbar = () => {
  return ( 
    <div className={navigation}>
      <div className={navBox}>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About</NavLink>
     </div>
   </div>
  )
}

export default Navbar

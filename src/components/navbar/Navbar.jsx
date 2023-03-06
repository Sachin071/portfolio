import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const mobile_nav_ref = useRef(null);
  const nav_header_ref = useRef(null);
  const [cls, setCLS] = useState('active')

  const toggleNavbar = ()=>{
    setCLS("");
  }

  return (
    <header className={`header ${cls}`} ref={nav_header_ref}>
      <p className='logo'>Shashank Patel</p>
      <nav className='navbar'>
        <ul className='navbar-list'>
              <li ><NavLink className='navbar-link' to='/' title='Shashank-Home'><i class="fa fa-home" aria-hidden="true"> </i> Home </NavLink>
              </li>
              <li><NavLink className='navbar-link'  to='/work' title='Shashank-work-experience'><i class="fa fa-building" aria-hidden="true"></i> Work</NavLink></li>
              <li><NavLink className='navbar-link' to='/about' title='Shashank-About'><i class="fa fa-user" aria-hidden="true"></i> About</NavLink></li>
              <li><NavLink className='navbar-link' to='/contact' title='Contact-me'><i class="fa fa-volume-control-phone" aria-hidden="true"></i> Contact</NavLink></li>
          </ul>
      </nav>
      <div className="mobile-navbar-btn">
      <i class="fa-solid fa-bars mobile-nav-icon" name="bars" onClick={() => setCLS("active")}></i>
      <i  class="fa-sharp fa-solid fa-xmark mobile-nav-icon" onClick={toggleNavbar} name="xmark"></i>
      </div>
        
    </header>
  )
}

export default Navbar
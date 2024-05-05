import React from 'react';
import './Navbar.css';
import logo from '../Assets/title logo.png';
import cart_icon from '../Assets/cart_icon.png';
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="clera logo"/>
            <p>Clera</p>
        </div>
    </div>
  )
}

export default Navbar;
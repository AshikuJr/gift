import React from 'react';
import './navbar.sass';

import logo from './logo.svg';

import Button from '../button/button.jsx';

const Navbar = props => {
  return <header className="navbar">
    <img src={logo} alt="logo" className="navbar-logo"/>
    <nav className="navbar-links">
      <a href="#about">About Us</a>
      <a href="#services">Services</a>
      <a href="#blogs">Blogs</a>
    </nav>
    <Button theme='main-empty' text='gift finder'/>
  </header>
};

export default Navbar;
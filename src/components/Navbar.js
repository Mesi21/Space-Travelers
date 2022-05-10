import React from 'react';
import logo from '../assets/planet.png';
import './Navbar.css';

const Navbar = () => (
  <header className="contained">
    <div className="logo-title">
      <img src={logo} alt="Logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <nav></nav>
  </header>
);

export default Navbar;

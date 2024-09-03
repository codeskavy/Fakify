import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-item">Home</a>
      <a href="#about" className="navbar-item">About</a>
      <a href="#how-it-works" className="navbar-item active">How it works</a>
      <a href="#Contact" className="navbar-item">Contact</a>
    </nav>
  );
};

export default Navbar;


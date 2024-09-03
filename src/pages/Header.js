import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={logo} className='img'/>
        <h1>DeFake.ai</h1>
        
      </div>
      <nav className="navbar">
      <a href="#home" className="navbar-item">Home</a>
      <a href="#about" className="navbar-item">About</a>
      <a href="#how-it-works" className="navbar-item active">How it works</a>
      <a href="#Contact" className="navbar-item">Contact</a>
    </nav>
      
        
        <button className="get-started">Get Started</button>
      
    </header>
  );
};

export default Header;

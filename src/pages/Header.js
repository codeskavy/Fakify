import React from 'react';
import '../styles/Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>DeFake.ai</h1>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#how-it-works">How it works</a>
        <a href="#contact">Contact
          
        </a>
        <button className="get-started">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;

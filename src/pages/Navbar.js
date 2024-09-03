// src/components/Navbar.js

import React from 'react';
import '../styles/Navbar.css'; // Import the CSS for styling

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
      
      </div>
      <nav className="navbar-links">
        <a href="#how-it-works">How it works</a>
        <a href="#features">Features</a>
        <a href="#blogs">Blogs</a>
        <a href="#faqs">FAQs</a>
      </nav>
    
    </header>
  );
};

export default Navbar;

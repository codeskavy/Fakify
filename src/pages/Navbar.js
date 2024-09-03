import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#how-it-works" className="navbar-item active">How it works</a>
      <a href="#features" className="navbar-item">Features</a>
      <a href="#blogs" className="navbar-item">Blogs</a>
      <a href="#faqs" className="navbar-item">FAQs</a>
    </nav>
  );
};

export default Navbar;


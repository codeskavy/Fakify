import React from 'react';
import 'src/styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MARKUPX</h1>
      </div>
      <nav className="nav-links">
        <a href="#how-it-works">How it works</a>
        <a href="#features">Features</a>
        <a href="#blogs">Blogs</a>
        <a href="#faqs">FAQs</a>
        <button className="get-started">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;

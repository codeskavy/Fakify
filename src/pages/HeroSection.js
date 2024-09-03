import React from 'react';

import '../styles/HeroSection.css';



const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
      <h1>We protect authenticity. <br /> Safeguard your <span className="highlight">digital truth</span></h1>

        <div className="email-subscribe">
          <input type="email" placeholder="name@email.com" />
          <button>Get notified</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


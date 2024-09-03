import React from 'react';
import 'src/styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>We build brands. <br /> Create impact for your <span className="highlight">community</span></h1>
        <div className="email-subscribe">
          <input type="email" placeholder="name@email.com" />
          <button>Get notified</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


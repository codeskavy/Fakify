import React from 'react';
import './App.css';
import Header from './pages/Header';
import HeroSection from './pages/HeroSection';
import SidePanel from './pages/SidePanel';
import Navbar from './pages/Navbar';
import MagicCrystals from './pages/MagicCrystals'
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
       
      <Header />
      
      <HeroSection />
 <div className="side-panels">
        <SidePanel position="left" />
        <SidePanel position="right" />
      </div>
      <MagicCrystals />
      <About/>
      <HowItWorks/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


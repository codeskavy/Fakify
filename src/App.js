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
import VideoPlayer from './pages/VideoPlayer';

function App() {
  return (
    <div className="App">
       <Navbar />
      <Header />
     
      <HeroSection />
 <div className="side-panels">
        <SidePanel position="left" />
        <SidePanel position="right" />
      </div>
      <MagicCrystals />
      <About/>
      <VideoPlayer/>
      <HowItWorks/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


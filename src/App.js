import React from 'react';
import './App.css';
import Header from './pages/Header';
import HeroSection from './pages/HeroSection';
import SidePanel from './pages/SidePanel';
import Navbar from './pages/Navbar';

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
    </div>
  );
}

export default App;


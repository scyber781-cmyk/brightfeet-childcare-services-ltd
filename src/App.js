import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Registration from './components/Registration';
import PurposeMission from './components/PurposeMission';

const MainContent = () => (
  <>
    <Home />
    <PurposeMission />
    <About />
    <Services />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

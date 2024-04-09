import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App3.css'
import Check_page from './Check_page3';
import './components/Check_page.css'
import Navbar from './components/Navbar2';
import Footer from './components/Footer';

function App3() {
  return (
    <div className="app-container">
      <Router>
      <Navbar />
      <Check_page />
      <Footer/>
      </Router>
    </div>
  );
}

export default App3;

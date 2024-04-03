import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar3 from './components/NavigationBar';
import SidebarContainer3 from './components/SidebarContainer';
import MainContentContainer3 from './components/MainContentContainer';
import './App3.css'

function App3() {
  return (
    <Router>
      <div className="app-container">
        <NavigationBar3 />
        <div className="content-container">
          <SidebarContainer3 />
          <MainContentContainer3 />
        </div>
      </div>
    </Router>
  );
}

export default App3;

// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar3 from './NavigationBar';
import SidebarContainer3 from './SidebarContainer';
import MainContentContainer3 from './MainContentContainer';
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

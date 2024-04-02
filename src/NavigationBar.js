// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar3() { /* 네비게이션 바 기능 */
  return (
    <nav className="navbar">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/notice" className="navbar-link">Notice</Link>
        <Link to="/logout" className="logout-button">Log Out</Link>
    </nav>
  );
}

export default NavigationBar3;

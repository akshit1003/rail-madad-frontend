import React from 'react';
// import logo from '../assets/logos.png';
import './Footer.css';

const Footer = () => {
  return (
    <header className="madad-header">
      <div className="logo-container">
        <h1 className="logo-text">Madad</h1>
      </div>
      <div className="menu-container">
        <div className="menu-column">
          <h2>RailMadad</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="menu-column">
          <h2>Resources</h2>
          <ul>
            <li>Add complaint</li>
            <li>Know your query status</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Footer;
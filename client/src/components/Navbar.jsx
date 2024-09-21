import React from 'react';
import logoImage from '../assets/logos.png';

function Navbar1() {
  return (
    <div className="navbar flex">
      <div className="logoNav">
        <img src={logoImage} alt="Logo" />
      </div>
      <ul className="nav-links flex">
        <li><a href="#">Post Your Complaint</a></li>
        <li><a href="#">Query Status</a></li>
        <li><a href="#">How We Help?</a></li>
      </ul>
    </div>
  );
}

export default Navbar1;
import React from 'react';
// import logoImage from '../assets/..logos.png';


function Navbar1() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src={logoImage} alt="Logo" /> */}
      </div>
      <ul className="nav-links">
        <li><a href="#">Post Your Complaint</a></li>
        <li><a href="#">Query Status</a></li>
        <li><a href="#">How We Help?</a></li>
      </ul>
    </nav>
  );
}

export default Navbar1;
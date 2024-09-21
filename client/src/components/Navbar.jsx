import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">   

        <img src="/madad-logo.jpg" />
        <span className="madad">Madad</span>
        
      </div>
      <ul className="nav-links">
        <li><a href="#">Post Your Complaint</a></li>
        <li><a href="#">Query Status</a></li>
        <li><a href="#">How We Help?</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
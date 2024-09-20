import React from 'react';
import './Footer.css';  // Assuming you have this CSS file for custom styles
// import LogoShape from './assets/logo-shape-4.svg';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="logo">
                    {/* <img src={LogoShape} alt="Logo" /> */}
                    <h1>Madad</h1>
                </div>
                <p>An online platform that allows railway passengers in India to register their complaints and seek assistance related to various railway services.</p>
                <div className="footer-column">
                    <h4>RailMadad</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Add complaint</a></li>
                        <li><a href="#">Know your query status</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

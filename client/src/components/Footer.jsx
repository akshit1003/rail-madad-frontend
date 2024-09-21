import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="madad-railmadad border-t-stone-200 border-t-2">
      <div className="logo1">
        <div className='flex items-center gap-4 ml-4'>
          <img src="src/assets/madad-logo.jpg" />
          <span className="madad-text">Madad</span>
        </div>
        <div className="platform">An online platform that allows railway passengers in India to register their complaints and seek assistance related to various railway services.</div>
      </div>
      <div className="madad">
        <div>
          <h3 className='font-bold'>RailMadad</h3>
        </div>
        <div class="links">
          <div><a href="#">Home</a></div>
          <div><a href="#">Services</a></div>
        </div>
      </div>
      <div className="resources">
        <div>
          <h3 className='font-bold'>Resources</h3>
        </div>
        <div class="links">
          <div><a href="#">Add complaint</a></div>
          <div><a href="#">Know your query status</a></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
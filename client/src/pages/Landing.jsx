import React from 'react';
import Navbar1 from '../components/Navbar';

function LandingPage() {
  return (
    <div>
      <Navbar1/>
      <header className="hero">
        <h1>Welcome to Our Landing Page</h1>
        <p>This is a sample landing page with a navbar.</p>
      </header>
      <main>
        {/* Your landing page content goes here */}
      </main>
    </div>
  );
}

export default LandingPage;

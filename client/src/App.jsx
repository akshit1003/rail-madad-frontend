import React from 'react';
// import './index.css';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <h2>We help you with all your issues</h2>
        <Services />
      </main>
      <Footer />
    </div>
  )
}

export default App

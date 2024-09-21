import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import OurServices from './components/Services';
import Complain from './pages/Complain';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/post-complaint" element={<OurServices />} />
          <Route path="/complaint" element={<Complain />} />
          <Route path="/how-we-help" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Complain from './pages/Complain';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landing';
import Query from './pages/Query';
// import Footer from './components/Footer';

function App() {
 return (
 <Router>
 <div className="App">
 <Navbar />
 <Routes>
 <Route path="/" element={<LandingPage />} />
 <Route path="/query-status" element={<Query />} />  
 <Route path="/complain" element={<Complain />} />   
 <Route path="/about" element={<About />} />
 </Routes>
 {/* <Footer /> */}
 </div>
 </Router>
 );
}

export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Research from './components/Research';
import LabMembers from './components/LabMembers';
import Publications from './components/Publications';
import News from './components/News';

function App() {
  return (
    <Router>
      <div className='fade-in'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/lab-members" element={<LabMembers />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

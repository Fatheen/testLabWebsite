// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h2>Decoding Cell Dynamics</h2>
          <p>
            Understanding the genetic and epigenetic basis of cell identity and plasticity in regeneration and tumorigenesis.
          </p>
        </div>
      </div>

     

      {/* Intro Section */}
      <div className="intro-section">
        <h2>Welcome to the Cell Dynamics Lab</h2>
        <h3>Our goal is to understand how cellular dynamics influence tissue regeneration and disease.</h3>
        <p>
          The Cell Dynamics Lab, led by Professor Preetish Kadur Lakshminarasimha Murthy, PhD, focuses on decoding
          the molecular mechanisms regulating adult stem cells in tissues. Our research aims to uncover insights
          into cell plasticity, transcriptional regulation, and the influence of stem cell niches, with implications
          for therapies targeting pulmonary and gastrointestinal diseases.
        </p>
        <p>
          We are part of the Department of Pharmacology & Regenerative Medicine at the University of Illinois Chicago,
          working collaboratively within the College of Medicine and affiliated research centers.
        </p>
        
        {/* Logos */}
        <div className="logos">
          <img src="https://blogs.illinois.edu/files/8565/1953234677/189508.jpg" alt="UIC Logo" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuZeIJi2xv6rQGRLDc-9G5DHwTSDn5Q5Kcw&s" alt="Department of Pharmacology Logo" />
          <img src="https://cancer.uillinois.edu/wp-content/themes/uicc/dist/images/UI-Health-UIC-icon-square-512x512-1.png" alt="UIC Cancer Center Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;

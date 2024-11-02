// src/components/Research.js
import React from 'react';
import ImageCarousel from './ImageCarousel';
import './Research.css';

const Research = () => {
  return (
    <div className="fade-in research-page">
      <div className="content-container">
        {/* Carousel on the Left */}
        <div className="carousel-section">
          <ImageCarousel />
        </div>

        {/* Text Content on the Right */}
        <div className="text-section">
          <h2>Our Research</h2>
          <p>
            Our lab is dedicated to decoding cell dynamics, focusing on understanding the molecular mechanisms that regulate
            adult stem cells within various tissues. These efforts provide insights into cell identity and plasticity, crucial
            for advancing therapies targeting pulmonary and gastrointestinal diseases. We investigate how transcriptional
            regulation, cell plasticity, and supportive niche environments influence stem cell behavior, with a focus on
            restoring homeostasis in diseased tissues.
          </p>
          
          <h3>Our Mission</h3>
          <p>
            Our mission is to develop new therapeutic strategies that leverage our understanding of cell dynamics to improve
            regenerative outcomes in patients. By studying how cells adapt and respond to their environments, we aim to
            foster advancements in regenerative medicine that can impact conditions related to cell dysfunction and
            aberrant cell proliferation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;

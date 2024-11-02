// src/components/Publications.js
import React from 'react';
import './Publications.css';

const Publications = () => {
  return (
    <div className="publications-page fade-in">
      <h2>Publications</h2>

      {/* Publication Year Section */}
      <div className="publication-year">
        <h3>2024</h3>
        <div className="publication-item">
          <img src="URL_OF_PUBLICATION_IMAGE_1" alt="Publication Cover" />
          <div className="publication-details">
            <p>
              <strong>Yan G, Han Z, Kwon Y, Jousma J, Nukala SB, Prosser BL, Du X, Pinho S, Ong SB, Lee WH, Ong SG.</strong>
            </p>
            <p>
              Integrated Stress Response Potentiates Ponatinib-Induced Cardiotoxicity.
              <em> Circ Res.</em> 2024 Mar;134(5):482-501. PMID: 38323474
            </p>
          </div>
        </div>
      </div>

      <div className="publication-year">
        <h3>2023</h3>
        <div className="publication-item">
          <img src="URL_OF_PUBLICATION_IMAGE_2" alt="Publication Cover" />
          <div className="publication-details">
            <p>
              <strong>Zhang S, Pinho S.</strong>
            </p>
            <p>
              Untangling the role of KIT ligand in HSC regulation. <em>Blood.</em> 2023 Nov;142(19):1581-1582.
              doi: 10.1182/blood.20230220213. PMID: 37944183.
              <a href="https://doi.org/10.1182/blood.20230220213">Link to publication</a>
            </p>
          </div>
        </div>

        <div className="publication-item">
          <img src="URL_OF_PUBLICATION_IMAGE_3" alt="Publication Cover" />
          <div className="publication-details">
            <p>
              <strong>Pinho S., Zhao M.</strong>
            </p>
            <p>
              Hematopoietic Stem Cells and Their Bone Marrow Niches. In: Zhao, M., Qian, P. (eds) Hematopoietic Stem Cells.
              <em> Advances in Experimental Medicine and Biology.</em> 2023; vol 1442. Springer.
              <a href="https://doi.org/10.1007/978-981-99-7471-9_2">Link to publication</a>
            </p>
          </div>
        </div>
      </div>

      {/* Add more years and publications as needed */}
    </div>
  );
};

export default Publications;

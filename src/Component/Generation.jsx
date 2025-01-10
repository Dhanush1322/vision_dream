
import React from 'react';
import labImage from '../img/syntheticc1.jpg'; // Replace with your actual image path
import '../Css/Synthetic_Chemicle.css'
import Header from './Header';
import t1 from '../img/t1.jpg';
import Footer from './Footer';

function Generation() {
  return (
    <>
    <Header />
    {/* Page Intro Section */}
    <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2>Technology</h2>
            </div>
          </div>
        </div>
      </section>
          <div>
          <h3 
           style={{
            marginBottom: '20px',
            width: '90%',  // Adjust width for better responsiveness
            marginInline: 'auto',
            textAlign: 'center',
            padding: '20px',  // Increased padding for more space around the text
            borderRadius: '15px',  // Rounded corners for a smoother appearance
            backgroundColor: '#f4f7f9',  // Light background for better readability
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  // Soft shadow for a floating effect
            fontSize: '16px',  // Slightly larger text for readability
            lineHeight: '1.6',  // Improved line spacing
            // color: '#333',  // Darker text color for better contrast
            fontFamily: 'Arial, sans-serif',  // Clean font style
            borderLeft: '5px solid #145096'  // Highlighted left border
          }}
          className="heading-technology">Generation of Amino acid Inspired Small Molecules (AISM)</h3>
          <p 
          style={{
            fontSize: '18px',  // Adjust the font size for better readability
            color: '#555',  // Darker gray color for better contrast
            fontFamily: 'Arial, sans-serif',  // Consistent font family
            lineHeight: '1.8',  // Improved line height for readability
            textAlign: 'center',  // Center-align the text
            marginBottom: '20px',  // Add some space below the paragraph
            padding: '10px',  // Add some padding around the text
            backgroundColor: '#f4f7f9',  // Light background to match the section
            borderRadius: '8px',  // Rounded corners for a modern look
            maxWidth: '80%',  // Limit the width for better responsiveness
            marginInline: 'auto',  // Center the paragraph horizontally
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',  // Soft shadow for floating effect
          }}
          className="paragraph-title">Concept clinically validated as inhibitors of protein-protein interactions</p>

          </div>
    <div className="synthetic-chemical-container" style={{paddingTop:'0px'}}>
      <div className="technology-container">

        <div className="content-wrapper">
          <img src={t1} alt="Technology" className="technology-image" />

        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}

export default Generation;

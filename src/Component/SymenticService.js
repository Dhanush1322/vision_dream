import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Css/SymenticService.css';
import symentic from '../img/symentic.jpg';
import { list } from 'postcss';

function SymenticService() {
  return (
    <>
      <Header />

      {/* Page Intro Section */}

      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">

              <h2>Synthetic Service</h2>
            </div>
          </div>
        </div>
      </section>


      {/* Content Section with 80% Width */}
      <div className="content-container" style={{ width: '100%' }}>
        <p className="contin-text"
          style={{
            marginBottom: '20px',
            width: '100%',  // Adjust width for better responsiveness
            marginInline: 'auto',
            textAlign: 'left',
            padding: '20px',  // Increased padding for more space around the text
            borderRadius: '15px',  // Rounded corners for a smoother appearance
            backgroundColor: '#f4f7f9',  // Light background for better readability
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  // Soft shadow for a floating effect
            fontSize: '16px',  // Slightly larger text for readability
            lineHeight: '1.6',  // Improved line spacing
            color: '#333',  // Darker text color for better contrast
            fontFamily: 'Arial, sans-serif',  // Clean font style
            borderLeft: '5px solid #145096'  // Highlighted left border
          }}

        >
          We are highly specialized and experienced in the synthesis of various peptide designs. We provide quality peptides with detailed characterization and Certificate of Analysis. <br/>  Partner with us and get quality peptides on time for ALL YOUR PEPTIDE NEEDS
        </p>
        <div className="content-wrapper-gelotics">
          <ul style={{padding:'0px'}}>
            <li
              style={{
                fontSize: '20px', // Increased font size for better readability
                fontWeight: '600',  // Slightly bold font weight
                fontFamily: 'Roboto, sans-serif', // Applying a modern sans-serif font
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',

                 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Labelled peptides</li>
            <li
              style={{
                fontSize: '20px', // Increased font size for better readability
                fontWeight: '600',  // Slightly bold font weight
                fontFamily: 'Roboto, sans-serif', // Applying a modern sans-serif font
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',

                 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Derivatized peptides</li>
            <li
              style={{
                fontSize: '20px', // Increased font size for better readability
                fontWeight: '600',  // Slightly bold font weight
                fontFamily: 'Roboto, sans-serif', // Applying a modern sans-serif font
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',

                 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Synthesis of long chain linkers</li>
            <li
              style={{
                fontSize: '20px', // Increased font size for better readability
                fontWeight: '600',  // Slightly bold font weight
                fontFamily: 'Roboto, sans-serif', // Applying a modern sans-serif font
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',

                 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Peptide combinatorial libraries</li>
            <li
              style={{
                fontSize: '20px', // Increased font size for better readability
                fontWeight: '600',  // Slightly bold font weight
                fontFamily: 'Roboto, sans-serif', // Applying a modern sans-serif font
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',

                 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Peptoids</li>
            <li
              style={{
                fontSize: '20px', // Increased font size for better readability
                fontWeight: '600',  // Slightly bold font weight
                fontFamily: 'Roboto, sans-serif', // Applying a modern sans-serif font
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',

                 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Peptidomimetics</li>
          </ul>

          <ul style={{padding:'0px'}}>
            <li
              style={{
                fontSize: '20px',
                fontWeight: '600',  
                fontFamily: 'Roboto, sans-serif',
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Branched peptides</li>
            <li style={{
              fontSize: '20px', 
              fontWeight: '600',  
              fontFamily: 'Roboto, sans-serif',
              padding: '15px 25px',
              margin: '10px',
              borderRadius: '8px',
              backgroundColor: 'white',
              color: '#333',               
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >Conformationally constrained cyclic peptides</li>
            <li
              style={{
                fontSize: '20px',
                fontWeight: '600',  
                fontFamily: 'Roboto, sans-serif',
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Cysteine rich peptides: Toxins</li>
            <li
              style={{
                fontSize: '20px', 
                fontWeight: '600',  
                fontFamily: 'Roboto, sans-serif',
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Cyclic thioethers</li>
            <li style={{
                fontSize: '20px', 
                fontWeight: '600',  
                fontFamily: 'Roboto, sans-serif',
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}

            >Peptide chain dimers</li>
            <li
              style={{
                fontSize: '20px', 
                fontWeight: '600', 
                fontFamily: 'Roboto, sans-serif',
                padding: '15px 25px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#333',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >Cyclic peptides by click chemistry, stapling, and RCM</li>

          </ul>

        </div>
      </div>

      {/* <img src={symentic} alt="Symentic Service" className="responsive-image" /> */}

      <Footer />
    </>
  );
}

export default SymenticService;

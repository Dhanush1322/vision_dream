import React from 'react';
import t1 from '../img/t1.jpg';
import Header from './Header';
import Footer from './Footer';
import '../Css/Technology.css'; // Import the CSS file
import symentic from '../img/symentic.jpg';
import { Link } from 'react-router-dom';

function Technology() {
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
 
      <h3 className="heading-technology"  style={{
            marginBottom: '20px',
            width: '92%',  // Adjust width for better responsiveness
            marginInline: 'auto',
            textAlign: 'left',
            padding: '20px',  // Increased padding for more space around the text
            borderRadius: '15px',  // Rounded corners for a smoother appearance
            backgroundColor: '#f4f7f9',  // Light background for better readability
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  // Soft shadow for a floating effect
            fontSize: '26px',  // Slightly larger text for readability
            lineHeight: '1.6',  // Improved line spacing
            fontWeight: 'bold',  // Bold font weight for emphasis
            color: '#333',  // Darker text color for better contrast
            fontFamily: 'Arial, sans-serif',  // Clean font style
            borderLeft: '5px solid #145096'  // Highlighted left border
          }}>Orally bioavailable Amino acid Inspired Small Molecules (AISM)
      </h3>

      <p className="paragraph-title"  
      
      style={{
        margin: '20px auto',  // Centralized layout with proper spacing
        width: '90%',  // Responsive width
        textAlign: 'justify',  // Justified text for a clean appearance
        padding: '15px',  // Padding for better spacing inside the box
        borderRadius: '10px',  // Rounded corners for smooth edges
        backgroundColor: '#ffffff',  // Contrast background for separation
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow effect
        fontSize: '18px',  // Comfortable reading size
        lineHeight: '1.8',  // Enhanced line height for readability
        color: '#444',  // Slightly lighter text color for contrast
        fontFamily: 'Arial, sans-serif',  // Clean and readable font
        borderLeft: '4px solid #ccc'  // Subtle border for a polished look
      }}
      
      
      >The technology introduces an innovative, orally bioavailable miniature non-amidic analog (AISM) of peptide inhibitors, offering superior benefits compared to conventional peptide-or antibody-based approaches</p>


      <div className='tablebox'>
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Antibody/fusion protein</th>
              <th>Peptide</th>
              <th>AISM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Specificity and potency</td>
              <td>+++</td>
              <td>++</td>
              <td>++</td>
            </tr>
            <tr>
              <td>Ease of production</td>
              <td>+</td>
              <td>++</td>
              <td>++++</td>
            </tr>
            <tr>
              <td>Lower cost of goods</td>
              <td>+</td>
              <td>++</td>
              <td>++++</td>
            </tr>
            <tr>
              <td>Stability</td>
              <td>+</td>
              <td>++</td>
              <td>+++</td>
            </tr>
            <tr>
              <td>Tissue penetration</td>
              <td>+</td>
              <td>++</td>
              <td>+++</td>
            </tr>
            <tr>
              <td>Alternate delivery option</td>
              <td>-</td>
              <td>+++</td>
              <td>++++ including oral</td>
            </tr>
            <tr>
              <td>Pharmacokinetics exposure</td>
              <td>+++</td>
              <td>+</td>
              <td>++</td>
            </tr>
            <tr>
              <td>Lack of immunogenicity</td>
              <td>+</td>
              <td>++</td>
              <td>+++</td>
            </tr>
          </tbody>
        </table>

      </div>
      <h3 
  className="heading-technology"  
  style={{
    marginBottom: '20px',
    width: '92%', 
    marginInline: 'auto',
    textAlign: 'left',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: '#f4f7f9',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontSize: '26px',
    lineHeight: '1.6',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    borderLeft: '5px solid #145096',
  }}
>
  Design Strategy for Generating AISM Inhibitors for Protein-Protein Interactions (PPI)
</h3>

<div 
  className="content-container" 
  style={{
    width: '90%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  }}
>
  <p style={{
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '15px',
  }}>
    1) Presence of distinct interface of PPIs involving the loops/strand sequences can be exploited in identifying peptides that mimic the native interaction interface.
  </p>
  <p style={{
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '15px',
  }}>
    2) Native interaction pharmacophore identified by the reductionist approach comprising of less than 10 amino acids.
  </p>
  <p style={{
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '0',
  }}>
    3) Conversion of linear peptides into peptidomimetics and further SAR optimization resulting in orally available amino acid-inspired small molecule inhibitors.
  </p>
</div>

      <img src={symentic} alt="Symentic Service" style={{ width: '90%' }} className="responsive-image" />

      <div className="case-study-link" style={{textAlign:'center'}}>
         
          <Link to="/view-more" className="case-study-btn" style={{marginInline:'auto',marginBottom:'10px'}}>View More</Link>
        </div>

      <Footer />
    </>
  );
}

export default Technology;

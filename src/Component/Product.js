import React from 'react';
import '../Css/Product.css'; // Add any CSS styles here
import '../Css/casestudy.css'
import Header from './Header';

import Footer from './Footer';
import c1 from '../img/c1.jpg'
import c2 from '../img/c2.jpg'
import c3 from '../img/c3.jpg'
import c4 from '../img/c4.jpg'
import scalupimage from '../img/galoticscaleup.png'
import galoticscupimage from '../img/galoticscupimage.png'
import { Link } from 'react-router-dom';

function Product() {
  return (
    <>
      <Header />
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2 style={{textTransform:'none'}}>ScaleUp</h2>
            </div>
          </div>
        </div>
      </section>
 
      <div className="product-container" style={{width:'100%'}}>

        <h2 className="scaleuptext"  
        style={{
          marginBottom: '20px',
          width: '100%',  // Adjust width for better responsiveness
          marginInline: 'auto',
          textAlign: 'left',
          padding: '20px',  // Increased padding for more space around the text
          borderRadius: '15px',  // Rounded corners for a smoother appearance
          backgroundColor: '#f4f7f9',  // Light background for better readability
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  // Soft shadow for a floating effect
          // fontSize: '16px',  // Slightly larger text for readability
          lineHeight: '1.6',  // Improved line spacing
          // color: '#333',  // Darker text color for better contrast
          fontFamily: 'Arial, sans-serif',  // Clean font style
          borderLeft: '5px solid #145096'  // Highlighted left border
        }}
        >
          Process development and validation for Kilogram scale synthesis
        </h2>
        <div className="process-content">
          <ul 
          style={{
            listStyleType: 'disc',
            paddingLeft: '20px',
            margin: '0',
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
          }}
          >
            <li style={{ marginBottom: '10px' }}>Shortlisted unnatural amino acids</li>
            <li style={{ marginBottom: '10px' }}>Peptide building blocks</li>
            <li style={{ marginBottom: '10px' }}>Linkers</li>
            <li >Peptide fragments by avoiding preparative HPLC purification</li>
          </ul>
        </div>
       
        <div className="case-study-link">
         
          <Link to="/case-study" className="case-study-btn">View More</Link>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Product;

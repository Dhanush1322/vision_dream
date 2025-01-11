
import React from 'react';
import labImage from '../img/syntheticc1.jpg'; // Replace with your actual image path
// import '../Css/Synthetic_Chemicle.css'
import Header from './Header';
import Footer from './Footer';
import scalupimage from '../img/galoticscaleup.png'
import galoticscupimage from '../img/galoticscupimage.png'
// import '../Css/Product.css'; // Add any CSS styles here


function CaseStudy() {
  return (
    <>
    <Header />
    {/* Page Intro Section */}
    <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2>Case  Study</h2>
            </div>
          </div>
        </div>
      </section>
 
      <div className="product-container" style={{width:'100%'}}>  

      
      <h2 className="scaleuptext"   
      style={{
        marginBottom: '20px',
        width: '100%',  
        marginInline: 'auto',
        textAlign: 'left',
        padding: '20px',  
        borderRadius: '15px', 
        backgroundColor: '#f4f7f9', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
        lineHeight: '1.6', 
        fontFamily: 'Arial, sans-serif',  
        borderLeft: '5px solid #145096' 
      }}
      >
          Process optimization and kilogram scale manufacturing
        </h2>
        <p
           style={{
            width: '100%',  // Responsive width
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
        className="blackfont">Route optimization and scale up of Acyl amino acids</p>
        <div className="process-content">
          <ul>
            <li>Shortlisted unnatural amino acids</li>
            <li>Peptide building blocks</li>
          </ul>
        </div>
        <img src={scalupimage} alt="" className="scalupimage" style={{
          margin: '20px auto', 
          borderRadius: '15px', 
          boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
        }}/>

        <p className="blackfont"
         style={{
          width: '100%',
          textAlign: 'justify', 
          padding: '15px', 
          borderRadius: '10px', 
          backgroundColor: '#ffffff', 
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
          fontSize: '18px', 
          lineHeight: '1.8', 
          color: '#444',  
          fontFamily: 'Arial, sans-serif',  
          borderLeft: '4px solid #ccc'  
        }}
        >Route optimization and manufacturing of dipeptide using acyl amino acids</p>
        <div className="process-content">
          <ul>
            <li>In-house process developed and optimized for the synthesis of dipeptides</li>
          </ul>
        </div>
        <img src={galoticscupimage} alt="" className="scalupimage" 
         style={{
          margin: '20px auto', 
          borderRadius: '15px', 
          boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
        }}
        />
        <h2 className="scaleuptext" style={{fontSize:'20px',fontWeight:'bold',color:'#155293'}}>
          Preparative HPLC was avoided and compound was purified by crystallization/precipitation techniques. <br/> <br/> Delivered multi-kilograms of dipeptide using in house developed process
        </h2>
        </div>
    <Footer />
    </>
  );
}

export default CaseStudy;

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Css/DiscovoryService.css'; // Import the CSS file

function DiscovoryService() {
  return (
    <>
      <Header />
      {/* Page Intro Section */}
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2>Discovory Service</h2>
            </div>
          </div>
        </div>
      </section>


      {/* Content Section */}
      <div className="content-container" style={{ width: '100%' }}>
        <h3
          style={{
            marginBottom: '20px',
            width: '100%',  
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
            borderLeft: '5px solid #145096' 
          }}
        >
          Stabilization of identified “Hit or Lead”  peptides for improving potency, plasma stability and bioavailability   </h3>

        <ul className="content-list" id="content-list-discover" style={{
          listStyleType: 'none',
          padding: '0',
          fontSize: '1.8rem',
          display: 'flex',
          gap: '15px',
          marginLeft: '20px',
          flexWrap:'wrap'
        }}>
          <li
          className="content-list-item-discovery"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, background-color 0.3s',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '2rem', marginRight: '15px', color: '#388e3c' }}>🔬</span>Ala Scan
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, background-color 0.3s',
              cursor: 'pointer',
            }}
            className="content-list-item-discovery"

          >
            <span style={{ fontSize: '2rem', marginRight: '15px', color: '#388e3c' }}>🔬</span>Lactam Scan

          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, background-color 0.3s',
              cursor: 'pointer',
            }}
            className="content-list-item-discovery"

          >
            <span style={{ fontSize: '2rem', marginRight: '15px', color: '#388e3c' }}>🔬</span>Disulfide Scan
          </li>
        </ul>
        <h3
          style={{
            marginBottom: '20px',
            width: '100%',  
            marginInline: 'auto',
            textAlign: 'left',
            padding: '20px', 
            borderRadius: '15px', 
            backgroundColor: '#f4f7f9',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
            fontSize: '26px', 
            lineHeight: '1.6',  // Improved line spacing
            fontWeight: 'bold',  // Bold font weight for emphasis
            color: '#333',  // Darker text color for better contrast
            fontFamily: 'Arial, sans-serif',  // Clean font style
            borderLeft: '5px solid #145096'
          }}
        >
          Stabilization of identified metabolic hot spots
        </h3>

        <ul className="content-list" style={{
          listStyleType: 'none',
          padding: '0',
          fontSize: '1.8rem',
          display: 'flex',
          gap: '15px',
          marginLeft: '20px',
          flexWrap:'wrap'
        }}>
          <li
            className="content-list-item-discovery"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, background-color 0.3s',
              cursor: 'pointer',
            }}
          > <span style={{ fontSize: '2rem', marginRight: '15px', color: '#388e3c' }}>🔬</span>Identification of Metabolic Hot Spots</li>
          <li
           className="content-list-item-discovery"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, background-color 0.3s',
              cursor: 'pointer',
            }}
          > <span style={{ fontSize: '2rem', marginRight: '15px', color: '#388e3c' }}>🔬</span>Incorporation of D-Amino Acid</li>
          <li
            className="content-list-item-discovery"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, background-color 0.3s',
              cursor: 'pointer',
            }}
          > <span style={{ fontSize: '2rem', marginRight: '15px', color: '#388e3c' }}>🔬</span>Reduced Amide Bond Scan</li>
          <li
             className="content-list-item-discovery"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, background-color 0.3s',
              cursor: 'pointer',
            }}
          > <span style={{ fontSize: '2rem', marginRight: '15px', color: '#388e3c' }}>🔬</span>Incorporation of N-Methyl Amino Acids</li>
          <li
            className="content-list-item-discovery"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, background-color 0.3s',
              cursor: 'pointer',
            }}
          > <span style={{ fontSize: '2rem', marginRight: '15px', color: '#388e3c' }}>🔬</span>Macrocyclization Strategies</li>
          <li
           className="content-list-item-discovery"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, background-color 0.3s',
              cursor: 'pointer',
            }}
          > <span style={{ fontSize: '2rem', marginRight: '15px', color: '#388e3c' }}>🔬</span>Incorporation of Peptoid Units</li>
        </ul>
      </div>


      <Footer />
    </>
  );
}

export default DiscovoryService;

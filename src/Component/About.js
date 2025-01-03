import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import xImage from '../banner/x.jpg';

function About() {
  return (
    <div>
      <Header />

      {/* Page Intro Section */}
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">

              <h2>About US</h2>
            </div>
          </div>
        </div>
      </section>
      <h3 style={{textAlign:'center',color:'#0e7bbd',fontSize:'15px',fontWeight:'bolder',fontFamily:'unset'}}>GaloreTx Pharmaceuticals</h3>


      {/* Breadcrumb Section */}
      <section className="row breadcrumbRow">
        <div className="container">
          <div className="row inner m0">
            <ul className="breadcrumb" style={{ fontSize: '16px', fontWeight: '600' }}>
              <li><Link to="/" style={{ color: '#0072a0' }}>Home</Link></li>
              <li style={{ color: '#333' }}>About Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="row who_depts" style={{ padding: '0px 0' }}>
        <div className="container">
          <div className="row">
            {/* Who We Are Content */}
            <div className="col-sm-12 col-md-8 who_weR" style={{ width: '100%', padding: '15px 15px 20px' }}>
              <div className="row m0 titleRow text-left">
                {/* <h5 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0072a0' }}>Who We Are</h5> */}
                <h2 style={{ fontSize: '31px', fontWeight: '700', color: '#333',textTransform: 'none', }}>
                  Peptide chemistry is at the heart of
                  <span style={{
                    textTransform: 'none',
                    marginLeft:'5px',
                    color: '#0e7bbd', 
                    fontWeight: 'bold',
                    backgroundColor: '#f2f4f9',
                    padding: '2px 5px',
                    borderRadius: '4px'
                  }}>
                    GaloreTx®
                  </span>.
                </h2>
              </div>
              <div className="media" id="padding-top-zero">
                <div className="media-left">
                  <span>
                    <img
                      src={xImage}
                      alt="About GaloreTx"
                      style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                    />
                  </span>
                </div>
                <div className="media-body">

                  <p style={{ fontSize: '18px', fontWeight: '500', color: '#555', lineHeight: '1.6' }}>

                    At GaloreTx®, we leverage our extensive expertise in peptide chemistry to revolutionize drug discovery and development. Through innovative synthesis techniques and cutting-edge amino acid-inspired design strategies, we collaborate with our partners to advance peptide science.
                    <br /><br />
                    Our proprietary approach enables the transformation of peptides into orally bioavailable molecules, paving the way for breakthroughs in peptide drug discovery programs and pushing the boundaries of therapeutic innovation.
                    <br /><br />
                    A passionate and dedicated team committed to advancing healthcare by delivering complex peptides and peptidomimetics by focusing on developing transformative medicines that make a meaningful difference in patients' lives.
                  </p>
                  <Link
                    to="/BookanAppointment"
                    className="view_all"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#fff',
                      backgroundColor: '#0072a0',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none'
                    }}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;



import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';

import Footer from './Footer'



import './FounderAndLeadership.css';
function Team() {
  return (
    <div>

      <Header />
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">

              <h2>Team</h2>
            </div>
          </div>
        </div>
      </section>
      <h3 style={{textAlign:'center',color:'#0e7bbd',fontSize:'15px',fontWeight:'bolder',fontFamily:'unset'}}>GaloreTx Pharmaceuticals</h3>

      <section className="row breadcrumbRow">
        <div className="container">
          <div className="row inner m0">
            <ul className="breadcrumb">
              <li>
                <Link to="/"
                >Home</Link>
              </li>
              <li>Team</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="row team_section">
        <div className="container">
          <div className="row m0 titleRow text-center">
            <h5>Meet Our Team</h5>
            <h2>Experts in Peptide Chemistry</h2>
          </div>
          <div className="row team_content">
            <ul className="team_list">
              <li>
                <i className="fa fa-check-circle"></i> Team with a blend of peptide and organic chemists
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Synthetic expertise in peptides, peptidomimetics and peptide conjugates with small molecules
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Executed projects of varying complexity using both solution and solid-phase chemistry
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Team has knowledge of driving programs from hit to IND/IMPD
              </li>
              <li>
                <i className="fa fa-check-circle"></i> CMC activities to execute both peptide and peptidomimetic programs
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Process development can be tailored to customers’ needs in a cost-effective manner
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Operational flexibility and highly adaptable to project requirements
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default Team
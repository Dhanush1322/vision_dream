import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Chenna from '../img/Chenna.png';
import Sasi from '../img/Sasi.png';
import './FounderAndLeadership.css';

function Management() {
  return (
    <div>
      <Header />
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2>Management</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="row breadcrumbRow">
        <div className="container">
          <div className="row inner m0">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Management</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="row team_section_type2 bgf">
        <div className="container">
          <div className="row m0 titleRow text-left">
            <h2> Management Team</h2>
          </div>
          <div className="row dorctors_row">
            <div className="col-sm-6 col-md-6 team_member">
              <div className="row m0 inner">
                <Link to="#">
                  <div className="row m0 image">
                    <img src={Sasi} alt="" className="img-responsive" />
                  </div>
                  <div className="row m0 title_row">
                    <h5>Pottayil G Sasikumar, Ph.D</h5>
                    <div className="row m0 pos">Co-Founder and Chief Executive officer</div>
                  </div>
                </Link>
                <p>
                  Sasikumar (Sasi) brings more than 20 years of expertise in peptide drug discovery and development. Before co-founding GaloreTx, he played a pivotal role in establishing the peptide department at Aurigene Oncology, a prominent Indian biotech and CRO. As Research Director, he led a team of over 50 scientists and contributed to the development of numerous innovative drugs in cancer immunotherapy, including one now in Phase 3 clinical trials. Under his leadership, GaloreTx has become a trusted partner for biotech and pharmaceutical companies focused on peptide-based solutions.
                </p>
                <ul className="social_list">
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-google-plus" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 team_member">
              <div className="row m0 inner">
                <Link to="#">
                  <div className="row m0 image">
                    <img src={Chenna} alt="" className="img-responsive" />
                  </div>
                  <div className="row m0 title_row">
                    <h5>Gundala Chennakrishnareddy, Ph.D.</h5>
                    <div className="row m0 pos">Co-Founder and Chief Technology officer</div>
                  </div>
                </Link>
                <p>
                  Chennakrishnareddy (Chenna) brings over 14 years of expertise in peptide chemistry, with extensive experience in the pharmaceutical industry, including roles at AstraZeneca India and Aurigene Oncology. His core strengths lie in complex peptide synthesis, optimization, scale-up, and process development. A co-inventor of multiple patents, including a drug currently in Phase 1 clinical trials, Chenna is instrumental in shaping GaloreTx's growth by leading its scientific and technological initiatives.
                </p>
                <ul className="social_list">
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-google-plus" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Management;

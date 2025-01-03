import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Chenna from '../img/Chenna.png';
import Raghu from '../img/Raghu.jpg';
import Sasi from '../img/Sasi.png';
import './FounderAndLeadership.css';

function FounderAndLeadership() {
  return (
    <div>
      <Header />
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">

              <h2>Founders</h2>
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
                <Link to="/">Home</Link>
              </li>
              <li>Founders</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="row team_section_type2 bgf">
        <div className="container">
          <div className="row m0 titleRow text-left">
            <h2>Founders</h2>
          </div>
          <div className="row dorctors_row">
            <div className="col-sm-6 col-md-4 team_member">
              <div className="row m0 inner">
                <Link to="#">
                  <div className="row m0 image">
                    <img
                      src={Sasi}
                      alt=""
                      className="img-responsive"
                    />
                  </div>
                  <div className="row m0 title_row">
                    <h5>Sasikumar PG, Ph.D.</h5>
                  </div>
                </Link>
                <p>
                  20 Years of experience in peptide drug discovery and development. Co-Inventor of several drugs in cancer immunotherapy, most advanced drug currently in Phase 2b/3 clinical trials.
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
                  <li>
                    <Link to="#">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 team_member">
              <div className="row m0 inner">
                <Link to="#">
                  <div className="row m0 image">
                    <img
                      src={Chenna}
                      alt=""
                      className="img-responsive"
                    />
                  </div>
                  <div className="row m0 title_row">
                    <h5>Chennakrishnareddy Gundala, Ph.D.</h5>
                  </div>
                </Link>
                <p>
                  14 years experience in Pharma industry in peptide chemistry and peptide therapeutics. Experience in peptide route optimization and scale up. Co-inventor of multiple patents, most advanced drug in Phase 1 Clinical Trial.
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
                  <li>
                    <Link to="#">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 team_member">
              <div className="row m0 inner">
                <Link to="#">
                  <div className="row m0 image">
                    <img
                      src={Raghu}
                      alt=""
                      className="img-responsive"
                      style={{ width: '400px' }}
                    />
                  </div>
                  <div className="row m0 title_row">
                    <h5>Raghuveer Ramachandra, Ph.D.</h5>
                  </div>
                </Link>
                <p>
                  Pharmacologist, with 14 years experience in drug discovery. Extensive experience in developing and optimizing screening funnels for drug discovery programs including in vitro, DMPK and in vivo model systems. Several drugs are in his credits which are in various phases of clinical development.
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
                  <li>
                    <Link to="#">
                      <i className="fa fa-linkedin" />
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

export default FounderAndLeadership;

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
      <h3 style={{textAlign:'center',color:'#0e7bbd',fontSize:'15px',fontWeight:'bolder',fontFamily:'unset'}}>GaloreTx Pharmaceuticals</h3>

      <h3 className="heading-technology">Orally bioavailable Amino acid Inspired Small Molecules (AISM)
      </h3>

      <p className="paragraph-title">The technology introduces an innovative, orally bioavailable miniature non-amidic analog (AISM) of peptide inhibitors, offering superior benefits compared to conventional peptide-or antibody-based approaches</p>


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
      <h3 className="heading-technology">Design strategy for generating AISM inhibitors for Protein-Protein Interactions (PPI)
      </h3>

      <div className="content-container">
        <p>
          1) Presence of distinct interface of PPIs involving the loops/strand sequences can be exploited in identifying peptides that mimic the native interaction interface.
        </p>
        <p>
          2) Native interaction pharmacophore identified by the reductionist approach comprising of less than 10 amino acids.
        </p>
        <p>
          3)  Conversion of linear peptides into peptidomimetics and further SAR optimization resulting in orally available amino acid-inspired small molecule inhibitors.
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

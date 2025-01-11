import React from 'react';
import '../Css/CompanyMarquee.css';

function CompanyMarquee() {
  return (
    <div className="marquee-container">
      <marquee behavior="scroll" direction="left">
        <span className="company-name">Galore Tx</span>
      </marquee>
    </div>
  );
}

export default CompanyMarquee;

import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import CTASection from '../../components/CTASection/CTASection.js';
import Portfolio from '../../main-components/Portfolio/Portfolio.js';

const PortfolioPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Portfolio />
      <CTASection />
      <Footer />
    </Fragment>
  );
};

export default PortfolioPage;

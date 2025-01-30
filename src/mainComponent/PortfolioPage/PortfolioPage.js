import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import CTASection from '../../components/CTASection/CTASection.js';

const PortfolioPage = () => {
  return (
    <Fragment>
      <Navbar />
      <CTASection />
      <Footer />
    </Fragment>
  );
};

export default PortfolioPage;

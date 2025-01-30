import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import AboutUs from '../../components-sub/AboutUs/AboutUs.js';
import CTASection from '../../components/CTASection/CTASection.js';

const AboutPage = () => {
  return (
    <Fragment >
      <Navbar />
      <AboutUs />
      <CTASection />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;

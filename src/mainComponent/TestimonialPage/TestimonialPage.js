import React, { Fragment } from "react";
import TestimonialMain from "../../components-sub/TestimonialMain/TestimonialMain.js";
import CTASection from "../../components/CTASection/CTASection.js";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";

const TestimonialPage = () => {
  return (
    <Fragment>
      <Navbar />
      <TestimonialMain />
      <CTASection />
      <Footer />
    </Fragment>
  );
};

export default TestimonialPage;

import React, { Fragment } from "react";
import CallToAction from "../../components/CallToAction/CallToAction.js";
import Features from "../../components/Features/Features.js";
import Footer from "../../components/Footer/Footer.js";
import HeroSection from "../../components/HeroSection/HeroSection";
import HowItWorks from "../../components/HowItWorks/HowItWorks.js";
import Navbar from "../../components/Navbar/Navbar.js";
import Testimonials from "../../components/Testimonials/Testimonials.js";

const LandingPage = () => {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </Fragment>
  );
};
export default LandingPage;

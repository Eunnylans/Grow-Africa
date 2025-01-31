import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import ContactUs from '../../components-sub/ContactUs/ContactUs.js';

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar />
      <ContactUs />
      <Footer />
    </Fragment>
  );
};

export default ContactPage;

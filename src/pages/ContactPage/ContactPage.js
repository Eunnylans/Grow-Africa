import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer.js";
import ContactUs from "../../main-components/ContactUs/ContactUs.js"
import Navbar from '../../components/Navbar/Navbar.js';

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

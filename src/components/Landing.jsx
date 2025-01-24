import React from "react";
import Navbar from "./Navbar";
import CorporateMania from "./CorporateMania";
import OurExpertise from "./OurExpertise";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import OurServices from "./OurServices";

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <CorporateMania />
      <OurExpertise />
      <OurServices />
      <div className="w-14 h-14 fixed bottom-8 right-8 hover:cursor-pointer z-10">
        <img src="images/whatsapp-img.png" alt="" className="rounded-lg" />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Landing;

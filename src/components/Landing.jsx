import React from "react";
import Navbar from "./Navbar";
import CorporateMania from "./CorporateMania";
import OurExpertise from "./OurExpertise";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <CorporateMania />
      <OurExpertise />
      <div className="w-18 h-18 fixed bottom-8 right-8 hover:cursor-pointer">
        <img
          src="/public/images/whatsapp-img.png"
          alt=""
          className="rounded-lg"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;

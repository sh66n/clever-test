import React from "react";

const Footer = () => {
  return (
    <div>
      <img src="/public/images/footer.png" alt="" />
      <div className="flex flex-col items-center bg-black">
        <img
          src="images/alankaran-white-logo-img.png"
          className="h-24 pb-4"
          alt=""
        />
        <div className="text-white mt-4 mb-8">
          Copyright © 2025 Alankaran Weddings & Events (P) Ltd
        </div>
      </div>
    </div>
  );
};

export default Footer;

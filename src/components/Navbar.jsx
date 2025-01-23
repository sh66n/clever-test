import React from "react";
import Phone from "./icons/Phone";

const Navbar = () => {
  return (
    <div className="bg-black h-[8rem] flex items-center justify-evenly">
      <div className="h-full w-[15rem] flex items-center">
        <img
          src="public\images\alankaran-white-logo-img.png"
          className=""
          alt=""
        />
      </div>
      <div className="hover:cursor-pointer">
        <button className="text-black bg-white py-2 px-4 text-xl flex">
          CALL NOW
          <div className="h-[2rem] w-[2rem] mx-2">
            <Phone />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Phone from "./icons/Phone";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import { Carousel } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-black h-[8rem] flex items-center justify-evenly">
        <div className="h-full w-[15rem] flex items-center">
          <img src="images\alankaran-white-logo-img.png" className="" alt="" />
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
      <div className="flex-grow">
        <div className="h-full">
          <Carousel className="h-[calc(100vh-8rem)] w-full">
            <img
              src="/images/corporate-events-banner-img-05.png"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="/images/corporate-events-banner-img-04.png"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="/images/corporate-events-banner-img-01.png"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

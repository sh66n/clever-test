import React from "react";

const OurServices = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center h-full">
        <div className="w-[4rem] h-[2rem] border-yellow-800 font-bold my-6 mx-7  border-b-2"></div>
        <h2 className="text-5xl text-yellow-800 py-6 font-bold flex">
          Our Services
        </h2>
        <div className="w-[4rem] h-[2rem] border-yellow-800 font-bold my-6 mx-7  border-b-2"></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center  absolute">
          <div className="bg-yellow-800 h-[40rem] w-[40rem] rounded-full"></div>
        </div>
        <div className="mb-10">
          <div className="h-[55rem] w-[55rem]  z-10 opacity-50">
            <div className="grid grid-cols-3 h-full w-full">
              <div className="rounded-tl-xl m-1 flex flex-col text-center justify-evenly bg-white">
                <div className="flex justify-center">
                  <img src="/images/city-hall.png" alt="" />
                </div>
                <div className="text-2xl font-semibold">EVENTS VENUE</div>
                <div>
                  Choosing venues is one of the most important decisions
                </div>
                <div className="underline text-yellow-800">
                  <a href="">Book now</a>
                </div>
              </div>
              <div className="m-1 flex flex-col text-center justify-evenly bg-white">
                <div className="flex justify-center">
                  <img src="/images/microphone.png" alt="" />
                </div>
                <div className="text-2xl font-semibold">PRODUCTION STUDIO</div>
                <div>
                  Alankaran production studio is distinct in terms of creating
                </div>
                <div className="underline text-yellow-800">
                  <a href="">Book now</a>
                </div>
              </div>
              <div className="rounded-tr-xl m-1 flex flex-col text-center justify-evenly bg-white">
                <div className="flex justify-center">
                  <img src="/images/spotlights.png" alt="" />
                </div>
                <div className="text-2xl font-semibold">SOUND & LIGHTNING</div>
                <div>
                  Well-planned Sound & lighting is undoubtedly one of the
                </div>
                <div className="underline text-yellow-800">
                  <a href="">Book now</a>
                </div>
              </div>
              <div className="m-1 flex flex-col text-center justify-evenly bg-white">
                <div className="flex justify-center">
                  <img src="/images/camera.png" alt="" />
                </div>
                <div className="text-2xl font-semibold">
                  PHOTOGRAPHY & VIDEOGRAPHY
                </div>
                <div>
                  Any event or any special day when it comes to capturing
                </div>
                <div className="underline text-yellow-800">
                  <a href="">Book now</a>
                </div>
              </div>
              <div className="m-1 flex flex-col text-center justify-evenly bg-white">
                <div className="flex justify-center">
                  <img src="/images/file.png" alt="" />
                </div>
                <div className="text-2xl font-semibold">
                  PERMISSION OR LICENSE
                </div>
                <div>We at Alankaran provide the requisite permissions and</div>
                <div className="underline text-yellow-800">
                  <a href="">Book now</a>
                </div>
              </div>
              <div className="m-1 flex flex-col text-center justify-evenly bg-white">
                <div className="flex justify-center">
                  <img src="/images/cctv.png" alt="" />
                </div>
                <div className="text-2xl font-semibold">SECURITY</div>
                <div>
                  Alankaran assesses what risks the event is likely to face
                </div>
                <div className="underline text-yellow-800">
                  <a href="">Book now</a>
                </div>
              </div>
              <div className="rounded-bl-xl m-1 flex flex-col text-center justify-evenly bg-white">
                <div className="flex justify-center">
                  <img src="/images/shipped.png" alt="" />
                </div>
                <div className="text-2xl font-semibold">TRANSPORTATION</div>
                <div>Event transportation and Logistics are very important</div>
                <div className="underline text-yellow-800">
                  <a href="">Book now</a>
                </div>
              </div>
              <div className="m-1 flex flex-col text-center justify-evenly"></div>
              <div className="rounded-br-xl m-1 flex flex-col text-center justify-evenly bg-white">
                <div className="flex justify-center">
                  <img src="/images/cinema.png" alt="" />
                </div>
                <div className="text-2xl font-semibold">ARTIST MANAGEMENT</div>
                <div>Artist management is one of the most important</div>
                <div className="underline text-yellow-800">
                  <a href="">Book now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

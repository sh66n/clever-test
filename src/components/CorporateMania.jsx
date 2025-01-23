import React from "react";

const CorporateMania = () => {
  return (
    <section className="my-12 px-28">
      <div className="h-fit w-full flex justify-center">
        <div className="w-1/2">
          <div className="flex">
            <h2 className="text-5xl text-yellow-500 py-6 font-bold">
              Corporate Mania
            </h2>
            <div className="flex-grow text-yellow-500 font-bold border-b-2 my-6 mx-7"></div>
          </div>
          <p className="mb-4">
            Elevate your events with our expertise as a premier event planner in
            Hyderabad. As seasoned corporate event organizers, we specialize in
            curating seamless experiences that leave a lasting impression. Our
            dynamic team ensures that every detail is meticulously managed,
            making us your go-to events company for unparalleled professionalism
            and creativity.
          </p>
          <p>
            Whether its a large-scale conference or a niche gathering like a
            medical conference, our dedicated event planning company is equipped
            to handle it all. As a leading event management company, we bring
            precision and flair to every project, ensuring a flawless execution
            that exceeds expectations.
          </p>
        </div>
        <div className="w-1/2 flex justify-end p-8">
          <img src="/public/images/corporate-mania-img.jpg" alt="" />
        </div>
      </div>
      <div className="">
        For comprehensive corporate event services, trust in our experience as a
        reliable corporate event planner and corporate event coordinator. We
        pride ourselves on being at the forefront of corporate event management,
        offering tailored solutions to meet the unique needs of our clients. Let
        us transform your corporate events into memorable and impactful
        experiences.
      </div>
    </section>
  );
};

export default CorporateMania;

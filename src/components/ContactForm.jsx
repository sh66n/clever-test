import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#f0f0f0] flex justify-center py-36">
      <div className="border border-black w-full py-4 px-20 mx-20 relative">
        <div className="absolute w-24 h-24 -top-12 -right-12">
          <img src="/images/event-coordinator-4.png" alt="" />
        </div>
        <div className="absolute w-24 h-24 -bottom-12 -left-12">
          <img src="/images/feather.png" alt="" />
        </div>
        <div className="text-center">
          <h2 className="text-4xl py-4">Ready to get started?</h2>
          <div className="text-2xl">
            Contact us today to discuss your corporate event needs. Let&apos;s
            work together to create an event that exceeds your expectations.
          </div>
        </div>
        <form action="">
          <div className="my-4">
            <label htmlFor="name" className="">
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-20 border-2 rounded-sm h-10"
            />
          </div>
          <div className="my-4 flex">
            <div className="w-1/2 mr-4">
              <label htmlFor="name" className="">
                Company Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-20 border-2 rounded-sm h-10"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="name" className="">
                Designation
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-20 border-2 rounded-sm h-10"
              />
            </div>
          </div>

          <div className="my-4 flex">
            <div className="w-1/2 mr-4">
              <label htmlFor="name" className="">
                Email
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-20 border-2 rounded-sm h-10"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="name" className="">
                Phone Number
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-20 border-2 rounded-sm h-10"
              />
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="name" className="">
              Where did you hear from us?
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-20 border-2 rounded-sm h-10"
            />
          </div>

          <div className="my-4 flex">
            <div className="w-1/2 mr-4">
              <label htmlFor="name" className="">
                Date
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-20 border-2 rounded-sm h-10"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="name" className="">
                Budget
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-20 border-2 rounded-sm h-10"
              />
            </div>
          </div>

          <div className="my-4 flex">
            <div className="w-1/2 mr-4">
              <label htmlFor="name" className="">
                Tell us about your event
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-20 border-2 rounded-sm h-10"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="name" className="">
                How many guests are you expecting?*
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-20 border-2 rounded-sm h-10"
              />
            </div>
          </div>
          <div className="my-16">
            <button className="bg-orange-400 py-2 px-8 rounded-sm text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

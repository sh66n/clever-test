import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import ExpertiseImage from "./ExpertiseImage";
import ExpertiseTitle from "./ExpertiseTitle";
import ExpertiseDescription from "./ExpertiseDescription";

const OurExpertise = () => {
  return (
    <section className="bg-[#f0f0f0] py-12 px-28 text-black">
      <div className="flex justify-center h-full">
        <div className="w-[4rem] h-[2rem] border-yellow-800 font-bold my-6 mx-7  border-b-2"></div>
        <h2 className="text-5xl text-yellow-800 py-6 font-bold flex">
          Our Expertise
        </h2>
        <div className="w-[4rem] h-[2rem] border-yellow-800 font-bold my-6 mx-7  border-b-2"></div>
      </div>
      <div className="grid grid-cols-3">
        <ExpertiseCard>
          <ExpertiseImage src={"images/Annual-Day-events-scaled-img.jpg"} />
          <ExpertiseTitle>Annual Day Event</ExpertiseTitle>
          <ExpertiseDescription>
            Annual day events can be organized in every industry to show case
            the success of the growth or to share the happiness of 1 year…
          </ExpertiseDescription>
        </ExpertiseCard>
        <ExpertiseCard>
          <ExpertiseImage src={"images/Family-funday-events-img.jpg"} />
          <ExpertiseTitle>Family Day</ExpertiseTitle>
          <ExpertiseDescription>
            Family Fun Days are an excellent way to reward the families of hard
            working employees. Forward thinking companies see families…
          </ExpertiseDescription>
        </ExpertiseCard>
        <ExpertiseCard>
          <ExpertiseImage src={"images/Team-outing-scaled-img.jpg"} />
          <ExpertiseTitle>Team Outing</ExpertiseTitle>
          <ExpertiseDescription>
            Team outing is an exciting and a good opportunity to explore the new
            destination with the team and as well as to understand, involve…
          </ExpertiseDescription>
        </ExpertiseCard>
        <ExpertiseCard>
          <ExpertiseImage src={"images/Institution-activity-img.jpg"} />
          <ExpertiseTitle>Institutional Activities</ExpertiseTitle>
          <ExpertiseDescription>
            We are the best Event Organisers in Hyderabad provide services to
            the Institutions like pre event marketing, conference, meeting,
            seminars etc..
          </ExpertiseDescription>
        </ExpertiseCard>
        <ExpertiseCard>
          <ExpertiseImage src={"images/conference-ratan-tata-img.jpg"} />
          <ExpertiseTitle>
            Conferences- Seminars- Exhibitions- Meetings
          </ExpertiseTitle>
          <ExpertiseDescription>
            Conference- Seminar- Exhibition is one of the premium plat form for
            the events in terms of showcasing…
          </ExpertiseDescription>
        </ExpertiseCard>
        <ExpertiseCard>
          <ExpertiseImage src={"images/special-events-img.jpg"} />
          <ExpertiseTitle>Special Events</ExpertiseTitle>
          <ExpertiseDescription>
            Special Event is a one-time event focused on a specific purpose such
            as a groundbreaking, grand opening or other significant…
          </ExpertiseDescription>
        </ExpertiseCard>
      </div>
    </section>
  );
};

export default OurExpertise;

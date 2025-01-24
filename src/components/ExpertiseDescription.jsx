import React from "react";

const ExpertiseDescription = ({ children }) => {
  return (
    <div className="text-center">
      {children}
      <div className="text-yellow-800 font-bold">Read more...</div>
    </div>
  );
};

export default ExpertiseDescription;

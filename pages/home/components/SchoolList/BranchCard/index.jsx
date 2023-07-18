import React from "react";

const BranchCard = ({ image, city, campuses }) => {
  return (
    <>
      <div className="branch-card">
        <img src={image?.src} alt={city} height={40} />
        <div className="th-white-text th-16 th-fw-500 pt-3">{city}</div>
        <div className="th-white-text th-10 th-fw-300 pt-1">
          {campuses} Campuses
        </div>
      </div>
    </>
  );
};

export default BranchCard;

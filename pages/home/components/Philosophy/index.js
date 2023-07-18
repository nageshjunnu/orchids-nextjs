import React from "react";
import WavyShape from "@/public/images/wavy_shape.svg";
import PhilosophyImg from "@/public/images/philosophy.svg";
const Philosophy = () => {
  return (
    <>
      <div className="th-bg-secondary th-container py-4">
        <div className="py-4">
          <h2 className="th-fw-600 th-40 th-white-text text-center">
            Our Philosophy
          </h2>
        </div>
        <div className="py-3">
          <img
            className="th-img-fit-contain"
            src={PhilosophyImg?.src}
            alt="our philosophy"
          />
        </div>
      </div>
      <div
        className="th-bg-img"
        style={{
          backgroundImage: `url(${WavyShape?.src})`,
          width: "100%",
          height: "40px",
        }}
      ></div>
    </>
  );
};

export default Philosophy;

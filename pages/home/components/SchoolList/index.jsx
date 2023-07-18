import React from "react";
import WavyShape from "@/public/images/wavy_shape_upside.svg";
import CardImage from "@/public/images/schoolList.svg";
import BranchCard from "./BranchCard";
const SchoolList = () => {
  return (
    <>
      <div
        className="th-bg-img"
        style={{
          backgroundImage: `url(${WavyShape?.src})`,
          width: "100%",
          height: "40px",
        }}
      ></div>
      <div className="th-bg-secondary th-container py-5">
        <h2 className="th-fw-600 th-40 th-white-text text-center">
          List of Schools
        </h2>
        <div className="py-5 row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]?.map(
            (each) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 col-6 p-4">
                <BranchCard
                  image={CardImage}
                  city={"Bengaluru"}
                  campuses={12}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SchoolList;

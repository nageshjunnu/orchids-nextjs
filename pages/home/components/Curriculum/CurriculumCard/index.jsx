import React from "react";
import style from "@/styles/Curriculum.module.css";
const CurriculumCard = ({ details }) => {
  return (
    <>
      <div className={style["th-curriculum-card"]}>
        <div
          className={"th-bg-img " + style["th-card-img"]}
          style={{
            width: "100%",
            height: "200px",
            backgroundImage: `url(${details?.image?.src})`,
          }}
        ></div>
        <div className={"py-2 " + style["th-custom-list-icon"]}>
          <div className="text-center th-fw-600 th-20 pt-3">
            {details?.title}
          </div>
          <ul className="pt-3">
            {details?.points?.map((each, index) => (
              <li key={index} className="th-fw-300 th-14 py-1">
                {each}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CurriculumCard;

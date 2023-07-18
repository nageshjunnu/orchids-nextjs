import React from "react";
import CurriculumCard from "./CurriculumCard";
import CardImage from "@/public/images/dummyUser.png";
const curriculumArray = [
  {
    title: "EYP Curriculum",
    points: [
      "Conceptual learning",
      "Literacy and numeracy",
      "Kinesthetic learning & motor skill development",
      "Experiential learning",
      "Environmental awareness",
    ],
    image: CardImage,
  },
  {
    title: "Primary Curriculum",
    points: [
      "Conceptual learning",
      "Literacy and numeracy",
      "Kinesthetic learning & motor skill development",
      "Experiential learning",
      "Environmental awareness",
    ],
    image: CardImage,
  },
  {
    title: "Secondary Curriculum",
    points: [
      "Conceptual learning",
      "Literacy and numeracy",
      "Kinesthetic learning & motor skill development",
      "Experiential learning",
      "Environmental awareness",
    ],
    image: CardImage,
  },
];
const Curriculum = () => {
  return (
    <>
      <div className="th-container my-5">
        <div className="text-center pt-5">
          <h2 className="th-fw-600 th-40 text-center">Curriculum</h2>
          <div className="py-3 th-fw-300">
            <p>
              Nurturing roots through personal attention and
              <br /> adding values that stay with students
            </p>
          </div>
        </div>
        <div className="row pb-5">
          {curriculumArray?.map((each, index) => (
            <div className="col-md-4 p-3" key={index}>
              <CurriculumCard details={each} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Curriculum;

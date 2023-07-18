import FeatureCards from "../FeatureCards";
import schoolcard from "@/public/images/mts.png";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

const schoolFeature = [
  { id: 1, text: "Public Speaking", height: "320px" },
  { id: 2, text: "Financial Literacy", height: "320px" },
  { id: 3, text: "Field Visits", height: "320px" },
  { id: 4, text: "Robotics", height: "320px" },
];

export default class SchoolFeature extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,

            arrows: false,
          },
        },
      ],
    };
    return (
      <div className="th-container my-4 py-4">
        <div className="text-center p-3">
          <h2 className="th-primary-text th-40 th-fw-600">
            More than a school
          </h2>
          <h2 className="th-40 th-fw-700 mb-3">Your child's second home</h2>
          <p className="th-18 pt-2 th-fw-400">
            Nurturing roots through personal attention and<br></br> adding
            values that stay with students
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {schoolFeature?.map((eachFeature, index) => {
              return (
                <FeatureCards
                  key={index}
                  className={"p-3"}
                  src={schoolcard.src}
                  text={eachFeature.text}
                  height="360px"
                />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

import FeatureCards from "../FeatureCards";
import cctv from "@/public/images/cctv.png";
import staff from "@/public/images/staff.png";
import buses from "@/public/images/buses.png";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

const safetyFeature = [
  { id: 1, heading: "24*7 CCTV Surveillance", img: cctv },
  { id: 2, heading: "Trusted Staff", img: staff },
  { id: 3, heading: "GPS-activated Buses", img: buses },
];
export default class SafetyFeature extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.3,
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
      <>
        <div className="th-container my-4 py-4">
          <div className="pt-5 pb-3">
            <p className="th-28 th-fw-600 col-md-9">
              Orchids is not just an another CBSE or ICSE school in India, it is
              your child's second home.
            </p>
            <p className="th-40 th-fw-700 text-warning">
              Zero Compromise on safety
            </p>
          </div>
          <div>
            <Slider {...settings}>
              {safetyFeature?.map((eachFeature, index) => {
                return (
                  <FeatureCards
                    key={index}
                    className={"p-3"}
                    src={eachFeature.img.src}
                    text={eachFeature.heading}
                    height="360px"
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

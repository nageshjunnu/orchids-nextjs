import FeatureCards from "../FeatureCards";
import hostel from "@/public/images/hostel.png";
import mess from "@/public/images/mess.png";
import sports from "@/public/images/sports.png";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

const safetyFeature = [
  { id: 1, heading: "Hostel", text1: "Next Home For Kids", img: hostel },
  { id: 2, heading: "Mess", text1: "Family-style Meals", img: mess },
  { id: 3, heading: "Sports", text1: "Wide variety of sports", img: sports },
];
export default class SchoolInfraFeature extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.6,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.6,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,

            arrows: false,
          },
        },
      ],
    };

    return (
      <div className="th-container my-4 py-4">
        <div className="pt-5 pb-3 text-center">
          <p className="th-40 th-fw-700 col-md-8 offset-md-2">
            Infrastructure at Orchids the International school
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
                  text1={eachFeature.text1}
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

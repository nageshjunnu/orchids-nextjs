import award1 from "@/public/images/award1.png";
import award2 from "@/public/images/award2.png";
import award3 from "@/public/images/award3.png";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import AwardCard from "./awardCard";

const award = [
  { id: 1, img: award1 },
  { id: 2, img: award2 },
  { id: 3, img: award3 },
  { id: 4, img: award2 },
  { id: 5, img: award1 },
];
export default class Awards extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplaySpeed: 2000,
      autoplay: true,
      speed: 1000,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3.5,
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
            slidesToShow: 1.5,
            slidesToScroll: 1,

            arrows: false,
          },
        },
      ],
    };

    return (
      <div
        className="th-container my-4 py-5"
        style={{
          background:
            "var(--new-light-bg, linear-gradient(0deg, #E9E9F9 0%, rgba(225, 226, 255, 0.00) 100%))",
        }}
      >
        <div className="pb-3 text-center">
          <p className="th-40 th-fw-700 ">Awards</p>
        </div>
        <div>
          <Slider {...settings}>
            {award?.map((eachFeature, index) => {
              return (
                <AwardCard
                  key={index}
                  className={"p-3"}
                  src={eachFeature.img.src}
                  height="150px"
                />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

import FeatureCards from "../FeatureCards";
import blog1 from "@/public/images/blog1.png";
import blog2 from "@/public/images/blog2.png";
import blog3 from "@/public/images/blog3.png";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import BlogCard from "./blogCard";

const blogs = [
  {
    id: 1,
    heading: "Cyber Attack: Is the 'Big One' coming soon in 2022",
    details:
      "In the past 90 days, the world has a serious escalation in cyberattacks.",
    tag: "LIFESTYLE",
    img: blog1,
  },
  {
    id: 2,
    heading: "Why do chief security officers leave jobs so often?",
    details:
      "In both public and private organizations chief information security officers.",
    tag: "BUSINESS",
    img: blog2,
  },
  {
    id: 3,
    heading: "SIM swapping is a growing cyber threat — here’s help",
    details:
      "From cryptocurrency thefts to hacking bank accounts, SIM swapping is a growing.",
    tag: "BUSINESS",
    img: blog3,
  },
  {
    id: 4,
    heading: "Why do chief security officers leave jobs so often?",
    details:
      "In both public and private organizations chief information security officers.",
    tag: "BUSINESS",
    img: blog2,
  },
];
export default class Blog extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplaySpeed: 2000,
      autoplay: true,
      speed: 1000,
      slidesToShow: 3.3,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.4,
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
        <div className="th-container my-4 py-5">
          <div className="pb-3 text-center">
            <p className="th-40 th-fw-700">Featured blogs</p>
          </div>
          <div>
            <Slider {...settings}>
              {blogs?.map((eachFeature, index) => {
                return (
                  <BlogCard
                    key={index}
                    className={"p-3"}
                    src={eachFeature.img.src}
                    tag={eachFeature.tag}
                    heading={eachFeature.heading}
                    details={eachFeature.details}
                    height="200px"
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

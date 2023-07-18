import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function TruncateString(ss) {
  let newSS;
  if (ss.length > 100) {
    newSS = ss.substring(0, 100) + " ...";
  } else {
    newSS = ss;
  }
  return newSS;
}

const student = [
  {
    name: "student1",
    src: "./images/student1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "student1",
    src: "./images/student1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "student1",
    src: "./images/student1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "student1",
    src: "./images/student1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "student1",
    src: "./images/student1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "student1",
    src: "./images/student1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "student1",
    src: "./images/student1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "student1",
    src: "./images/student1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
];
const parent = [
  {
    name: "parent1",
    src: "./images/parents1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "parent1",
    src: "./images/parents1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "parent1",
    src: "./images/parents1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "parent1",
    src: "./images/parents1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "parent1",
    src: "./images/parents1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "parent1",
    src: "./images/parents1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
];
const teacher = [
  {
    name: "teacher1",
    src: "./images/teacher1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "teacher1",
    src: "./images/teacher1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "teacher1",
    src: "./images/teacher1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "teacher1",
    src: "./images/teacher1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "teacher1",
    src: "./images/teacher1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "teacher1",
    src: "./images/teacher1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
  {
    name: "teacher1",
    src: "./images/teacher1.svg",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
  },
];
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

            arrows: false,
          },
        },
      ],
    };
    return (
      <div className="containers-legal">
        <div className="my-5 py-3">
          <p className="text-center text-dark display-4">
            Hear it from the one's that matter the most
          </p>
          <p className="text-center text-dark display-5">Our Students</p>
        </div>
        <Slider {...settings}>
          {student.map((ele) => (
            <div>
              <div className="p-2 mb-5 m-3">
                <div className="card">
                  <div className="card-body">
                    <div className="">
                      <p className="text-dark">
                        <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                      </p>
                      <p>{TruncateString(ele.text)}</p>
                    </div>
                    <div className="d-flex">
                      <div className="rounded-circle shadow-4-strong ms-2 p-3"></div>
                      <div className="m-3 ">
                        <p className="text-dark fs-">{ele.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/*  */}
        {/* //parents */}
        {/*  */}
        <div className="my-5 py-3 d-flex" style={{ position: "relative" }}>
          <p className="text-center text-dark display-4">
            See how parents describe their experience with Orchids
          </p>
        </div>
        <Slider {...settings}>
          {parent.map((ele) => (
            <div>
              <div className="p-2 pt-5 m-2">
                <div
                  className="card d-flex"
                  style={{ position: "relative", backgroundColor: "lightgrey" }}
                >
                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <div
                        className="rounded-circle shadow-4-strong m-3 p-3"
                        style={{
                          backgroundImage: `url(https://media.istockphoto.com/id/1410336700/photo/happy-elementary-school-teacher-in-the-classroom-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=nXdixNtVUgCvuvwMGldF_DDSYM4p3CccK-AJhlwksCw=)`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          width: "120px",
                          height: "120px",
                          position: "absolute",
                          top: "-10%",
                          left: "46%",
                          zIndex: "1",
                          transform: "translate(-46%, -46%)",
                          border: "10px solid white",
                        }}
                      ></div>
                    </div>
                    <div className="py-3">
                      <p className="text-dark">
                        <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                      </p>
                      <p className="">{TruncateString(ele.text)}</p>
                    </div>
                    <div className="justify-content-center d-flex ">
                      <p className="text-dark fs-5">Parent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* 
        // Teacher
        //  */}
        <div className="my-5 py-3">
          <p className="text-center text-dark display-4">
            Read more about our Highly Trained, Passionate Faculty
          </p>
        </div>
        <Slider {...settings}>
          {teacher.map((ele) => (
            <div>
              <div className="p-2 m-2">
                <div
                  className="card  p-0 border"
                  style={{ borderRadius: "15px", backgroundColor: "#E5F2FE" }}
                >
                  <div className="card-body w-lg-200 p-0">
                    <div
                      className="wave-div border"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "15px",
                        backgroundColor: "437AF5",
                      }}
                    >
                      <div
                        className="border border-secondary rounded-circle shadow-4-strong m-3 p-3"
                        style={{
                          backgroundImage: `url(https://media.istockphoto.com/id/1410336700/photo/happy-elementary-school-teacher-in-the-classroom-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=nXdixNtVUgCvuvwMGldF_DDSYM4p3CccK-AJhlwksCw=)`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          width: "150px",
                          height: "150px",
                        }}
                      ></div>
                    </div>
                    <div className="p-4">
                      <p
                        className="fs-5"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {TruncateString(ele.text)}
                      </p>
                      <div className="justify-content-center d-flex ">
                        <p className="text-dark item-align-center">
                          <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                          <br></br>
                        </p>
                      </div>
                      <div className="justify-content-center d-flex ">
                        <p className="text-dark fs-5">
                          Teacher At Orchids Banglore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

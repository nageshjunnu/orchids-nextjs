import React from "react";
import styles from "@/styles/branch.module.css";
const Branch = () => {
  return (
    <React.Fragment>
      <main className="th-container my-5" style={{ minHeight: "90vh" }}>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 col-12">
            <h1 className="">
              Nurturing
              <br /> The Flight Within
            </h1>
            <div className="th-btn-lg-primary">Enquire Now</div>
          </div>
          <div className="col-md-8 col-12">
            <iframe
              style={{ width: "100%", borderRadius: "15px" }}
              height={407}
              src="https://www.youtube.com/embed/4MbE32J2B_A?list=TLGGTfIY829je30wNDA3MjAyMw"
              title="Orchids website banner"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="my-5 row align-items-center ">
          <div
            className="col-md-4 col-12 
            "
          >
            <div
              className="th-br-10 w-100"
              style={{
                backgroundImage: `url(https://nhps.in/wp-content/uploads/2022/07/pricipal-nhps-1024x949-1.jpg)`,
                height: "450px",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <div className="col-md-6 col-12 p-4">
            <div className="" style={{ textAlign: "justify" }}>
              <h4>Principle's Message</h4>
              <h5 className="th-fw-400 py-2">Dr. Anupama Sethi</h5>
              <div className="th-fw-600">
                "The purpose of education is to make good human beings with
                skill and expertise. Teachers can create enlightened human
                beings."
              </div>
              <div className="py-2">
                Dr. Anupama Sethi has been in the field of education for over 28
                years. She holds a Ph.D. in Linguistics. She has multiple roles
                to play during the course of her career as a counseling coach
                and QCI assessment trainer throughout her career. She has been
                credited with awards like Bharat Shiksha Ratna, Bhishma-The
                Determination award, Shiksha Padam Samman by AIPA, Progressive
                Principal 2019 by National school award, etc.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="py-5">
            <div className="text-center">
                h
            </div>
        </div> */}
      </main>
    </React.Fragment>
  );
};

export default Branch;

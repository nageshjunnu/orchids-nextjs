import React from "react";
import Welcome from "./components/Welcome";
import SchoolFeature from "./components/SchoolFeature";
import SafetyFeature from "./components/SafetyFeature";
import Motto from "./components/Motto";
import Philosophy from "./components/Philosophy";
import Curriculum from "./components/Curriculum";
import SchoolList from "./components/SchoolList";
import JourneyWaveCard from "./components/Journey";
import SchoolInfraFeature from "./components/SchoolInfraFeature";
import Awards from "./components/Awards";
import Blog from "./components/Blog";
import SchoolLocation from "./components/PopularSchoolLoc";
import Activities from "./components/Activities"
const Index = () => {
  return (
    <div className="mt-0">
    <div className="container-fluid">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/Website_Banner-min.jpg" className="d-block w-100 webbanner" alt="..."  />
                <img src="https://www.orchidsinternationalschool.com/wp-content/uploads/2023/02/Orchids_Mobile_version.jpg" className=" w-100 mobilebanner" alt="..."  />
            </div>
            <div className="carousel-item">
              <img src="/images/Website_Banner-min.jpg" className="d-block w-100 webbanner" alt="..."  />
              <img src="https://www.orchidsinternationalschool.com/wp-content/uploads/2023/02/Orchids_Mobile_version.jpg" className=" w-100 mobilebanner" alt="..."  />

            </div>
            <div className="carousel-item">
              <img src="/images/Website_Banner-min.jpg" className="d-block w-100 webbanner" alt="..." />
              <img src="https://www.orchidsinternationalschool.com/wp-content/uploads/2023/02/Orchids_Mobile_version.jpg" className=" w-100 mobilebanner" alt="..."  />

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div>
      </div>
      <div className="th-container">
        <h1 className="th-60 th-fw-600 text-center mt-3">
          Journey to a better <br />
          future begins with us
        </h1>
        <div className="py-3 text-center">
          <p className="th-fw-300">
            Orchids The International School is one of India's leading chains of
            <br />
            CBSE and ICSE schools, with 90+ schools across the country.
          </p>
        </div>
        <div className="py-3 d-flex justify-content-center align-items-center gap-3">
          <div className="th-btn-primary"> Enquire Now</div>
          <div className="th-btn-outlined"> About Us</div>
        </div>
      </div>
      <JourneyWaveCard />
      <Welcome />
      <Activities />
      <SchoolFeature />
      <SafetyFeature />
      <Motto />
      <Philosophy />
      <Curriculum />
      <SchoolList />
      <SchoolInfraFeature />
      <Awards />
      <Blog />
      <SchoolLocation />
    </div>
  );
};

export default Index;

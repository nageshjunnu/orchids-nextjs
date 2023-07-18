import MyDesktop from "@/components/utils/MyDesktop";
import MyMobile from "@/components/utils/MyMobile";
import React from "react";
import TwitterIcon from "@/public/images/headerImages/twitter.svg";
import FBIcon from "@/public/images/headerImages/fb.svg";
import InstaIcon from "@/public/images/headerImages/insta.svg";
import HeaderLogo from "@/public/images/logos/headerLogo.png";
import MobileHeader from "../mobileHeader";
import style from "@/styles/Header.module.css";
const OrchidsLogo =
  "https://www.orchidsinternationalschool.com/wp-content/uploads/2023/03/orchids-logo.jpg";
const Header = () => {
  return (
    <React.Fragment>
      <MyDesktop>
        <div className="th-container">
          <div className="py-2 d-flex justify-content-between align-items-center">
            <div className="th-fw-300">
              <div>(+91) 8-888-888-999</div>
              <div>info@orchids.edu.in</div>
            </div>
            <a href="/">
              <img src={HeaderLogo?.src} height={40} alt="Orchids Logo" />
            </a>
            <div className="d-flex justify-content-center align-items-center">
              <img
                height={30}
                src={TwitterIcon?.src}
                alt="twitter_link"
                className="px-2"
              />
              <img
                height={25}
                src={FBIcon?.src}
                alt="Fb_link"
                className="px-2"
              />
              <img
                height={25}
                src={InstaIcon?.src}
                alt="insta_link"
                className="px-2"
              />
            </div>
          </div>
          <div
            className={
              "bg-white shadow-sm py-3 my-2 th-br-25 d-flex align-items-center justify-content-around " +
              style["th-header"]
            }
          >
            <div className="">
              <div className="">About Us</div>
            </div>
            <div className="">
              <div className="d-flex gap-1">
                <div className="">Day Schools</div>
                <div className="">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex gap-1">
                <div className="">Boarding Schools</div>
                <div className="">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex gap-1">
                <div className="">Academics</div>
                <div className="">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex gap-1">
                <div className="">Admission</div>
                <div className="">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex gap-1">
                <div className="">Resources</div>
                <div className="">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex gap-2">
                <div className="">More</div>
                <div className="">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MyDesktop>
      <MyMobile>
        <MobileHeader />
      </MyMobile>
    </React.Fragment>
  );
};

export default Header;

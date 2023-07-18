import React from "react";

const Footer = () => {
  return (
    // <div className="th-bg-primary text-white text-center p-1">
    //   <p>
    //     Copyright @2023 |{" "}
    //     <a href="https://k12technoservices.com/" target="_blank">
    //       K12 Techno Services ®
    //     </a>{" "}
    //     | ORCHIDS - The International School
    //   </p>
    // </div>

    <footer>
      <div className={"W-100 px-4 py-1"}>
        <section className={""}>
          <div className={"row  p-0 m-0 "}>
            <div className={"col-lg-6 col-md-12 col-sm-12 pb-3 footer-pix"}>
              <img
                className={"p-0 pb-4"}
                src="https://www.orchidsinternationalschool.com/wp-content/uploads/2023/03/orchids-logo.jpg"
              ></img>

              <p className="p-1 m-1 text-dark ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae modi cum ipsam ad ?
              </p>
              <span>
                <img src="./images/facebook.png" className={"p-2"}></img>
                <img src="./images/twitter.png" className={"p-2"}></img>
                <img src="./images/instagram.png" className={"p-2"}></img>
                <img src="./images/linkedin.png" className={"p-2"}></img>
              </span>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <div
                  className={"col-lg-4 col-md-4 col-sm-12 pt-2  text-dark pb-3"}
                >
                  <h5 className={"text-uppercase pb-2 "}>Quick Link</h5>

                  <ul className={"list-unstyled mb-0 "}>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Home
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        About
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Service
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Testimonial
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Conatact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={"col-lg-4 col-sm-12 col-md-4 pt-2  pb-3"}>
                  <h5 className={"text-uppercase pb-2 text-dark"}>Services</h5>

                  <ul className={"list-unstyled mb-0"}>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Web Design
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Web Development
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Seo Optimisation
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Blog Writing
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={"col-lg-4 col-sm-12 col-md-4 pt-2  pb-3"}>
                  <h5 className={"text-uppercase text-dark pb-2"}>
                    Help & Support
                  </h5>

                  <ul className="list-unstyled mb-0">
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Support Center
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Live Chat
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        FAQ
                      </a>
                    </li>
                    <li className={"p-1"}>
                      <a href="#!" className={"text-dark"}>
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className={"mb-4"} />
    </footer>
  );
};

export default Footer;

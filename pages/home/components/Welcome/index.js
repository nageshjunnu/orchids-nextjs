import welcomeEllipse from "@/public/images/welcomeEllipse.svg";
import workingStartup from "@/public/images/workingStartup.png";
export default function Welcome() {
  return (
    <div className="th-container row justify-content-around align-items-center my-3 py-3">
      <div className="col-md-6 col-sm-12 order-sm-2 order-md-1 p-3">
        <div>
          <h1 className="th-fw-700 th-36 pb-2">Welcome to Orchids</h1>
          <p className="th-fw-400 th-16">
            Orchids The International School is one of India's leading chains of
            CBSE and ICSE schools, with 90+ schools across the country. Orchids
            found their first home in Hyderabad. Since then, we have spread our
            wings across 25+ cities and still growing.
          </p>
          <p className="th-fw-400 th-16">
            We are redefining education for upcoming generations with smart
            classes, a remodelled educational philosophy, top-notch
            infrastructure, and a technology-integrated curriculum. Such
            innovation has brought us recognition from Times School Survey
            Awards and Asian Education Leadership Awards.
          </p>
        </div>
        <div className="p-3 ps-0 d-flex  gap-3">
          <div className="th-btn-primary"> About Us</div>
          <div className="th-btn-outlined"> Enquire Now</div>
        </div>
      </div>
      <div
        className=" col-md-6 cols-sm-12 order-sm-1 order-md-1 p-3 mb-3 th-bg-img-contain d-grid align-items-center"
        style={{
          height: "600px",
          backgroundImage: `url(${welcomeEllipse.src})`,
        }}
      >
        <div
          className="th-br-10 th-bg-img"
          style={{
            backgroundImage: `url(${workingStartup.src})`,
            height: "400px",
          }}
        ></div>
      </div>
    </div>
  );
}

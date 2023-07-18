import admissionHand from "@/public/images/admissionHand.png";
import ProgressBar from "./components/progressBar";
export default function Admission() {
  return (
    <div className="th-container">
      <div className="row justify-content-center text-center">
        <div
          className="col-12 th-bg-img-contain"
          style={{
            background: `url(${admissionHand.src})`,
            // backgroundBlendMode: " overlay",
            height: "240px",
            width: "280px",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }}
        ></div>
        <div className="col-12 my-3">
          <p className="th-60 th-fw-700">
            Welcome to <span className="th-primary-text">Orchids</span>
          </p>

          <p className="th-16 th-fw-400">
            Small contextual welcome message.Orchids Online Admission Form Fee
            Structure Enquiry Form
          </p>
        </div>
      </div>

      <div
        className="th-br-24 row justify-content-center align-items-center text-center"
        style={{
          border: "1px solid var(--gray-200, #EAECF0)",
          background:
            "var(--bg-light, linear-gradient(299deg, rgba(251, 232, 255, 0.58) 0%, rgba(209, 224, 255, 0.58) 100%))",
        }}
      >
        <div className="col-12 py-4 my-5">
          <p className="th-30 th-fw-600">Application form</p>
          <p className="th-16 th-fw-400">
            Orchids Online Admission Form Fee Structure Enquiry Form
          </p>
        </div>
        <ProgressBar />
        <div className="my-4">
          <div className="th-btn-primary mx-3 ">
            <p className="th-16 fw-600 m-0 p-0">Lets get started</p>
          </div>
          <div className="th-btn-outlined mx-3 ">
            <p className="th-16 th-fw-600 p-0 m-0">Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <div
      className="containers-legal py-5 my-5 w-100"
      style={{ backgroundColor: "#808488;" }}
    >
      <div className="row text-center">
        <div className="col align-items-center">
          <div>
            <i
              className="fas fa-university fa-lg fs-1 pb-3"
              style={{ color: "#e6d94c" }}
            ></i>
          </div>
          <div className="fw-bold">90+</div>
          <div className="fw-bold">Campuses</div>
        </div>
        <div className="col">
          <div>
            <i
              className="fas fa-map-marked-alt fa-lg fs-1 pb-3"
              style={{ color: "#e6d94c" }}
            ></i>
          </div>
          <div className="fw-bold">25+</div>
          <div className="fw-bold">Cities</div>
        </div>
        <div className="col">
          <div>
            <i
              className="fas fa-chalkboard-teacher fa-lg fs-1 pb-3"
              style={{ color: "#e6d94c" }}
            ></i>
          </div>
          <div className="fw-bold">7000+</div>
          <div className="fw-bold">Teachers</div>
        </div>
        <div className="col">
          <div>
            <i
              className="fas fa-user-graduate fa-lg fs-1 pb-3"
              style={{ color: "#e6d94c" }}
            ></i>
          </div>
          <div className="fw-bold">75000+</div>
          <div className="fw-bold">Students</div>
        </div>
      </div>
    </div>
  );
}

const places = [
  "Aurangabad",
  "Aurangabad",
  "Aurangabad",
  "Aurangabad",
  "Patna",
  "Aurangabad",
  "Aurangabad",
  "Aurangabad",
  "Aurangabad",
  "Aurangabad",
  "Aurangabad",
  "Patna",
  "Aurangabad",
  "Patna",
  "Aurangabad",
  "Aurangabad",
  "Aurangabad",
  "Aurangabad",
];
export default function PopularSchoolLoc() {
  return (
    <div className="th-container">
      <div>
        <p className="th-30 th-fw-600">CBSE schools in popular cities</p>
      </div>
      <div className="my-5" style={{ display: "flex", flexWrap: "wrap" }}>
        {places.map((ele) => {
          return (
            <div className="th-br-36 px-3 py-2 m-2 th-chips">
              <p className="th-13 th-fw-600 m-0 p-0">{ele}</p>
            </div>
          );
        })}
      </div>
      <div className="my-5">
        <p className="th-30 th-fw-600">Pre schools in popular cities</p>
      </div>
      <div className="my-5" style={{ display: "flex", flexWrap: "wrap" }}>
        {places.map((ele) => {
          return (
            <div className="th-br-36 px-3 py-2 m-2 th-chips">
              <p className="th-13 th-fw-600 m-0 p-0">{ele}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

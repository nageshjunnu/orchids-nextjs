export default function BlogCard(props) {
  return (
    <div className={props.className}>
      <div
        className="th-bg-img th-br-10 d-flex justify-content-end text-center"
        style={{
          backgroundImage: `url(${props.src})`,
          height: `${props.height}`,
        }}
      >
        <div
          className="th-br-6 m-2 p-1 d-flex justify-content-center align-items-center p-2 "
          style={{
            background: "var(--01, #FFF)",
            height: "30px",
          }}
        >
          <div>
            <p className="th-12 th-fw-600 m-0 p-0 text-uppercase">
              {props.tag}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="p-2 pt-4">
        <p className="th-20 th-fw-600 m-0">{props.heading}</p>
      </div>
      <div className="p-1">
        <p className="th-16 th-fw-400 m-0">{props.details}</p>
      </div>
    </div>
  );
}

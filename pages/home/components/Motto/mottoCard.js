export default function MottoCard(props) {
  return (
    <div className={props.className}>
      <div
        className="th-br-16"
        style={{
          border: "1px solid #E9E9F9",
          background: "#F9F9FF",
        }}
      >
        <div className="p-3">
          <div
            className="p-2 th-bg-img"
            style={{
              backgroundImage: `url(${props.bg})`,
              width: "60px",
              height: "60px",
            }}
          >
            <img className="p-2" src={props.img}></img>
          </div>
        </div>
        <div className="p-3">
          <div className="p-2">
            <h1 className="th-36 th-fw-600">{props.number}+</h1>
            <h2
              className="th-20 th-fw-400"
              style={{ color: "var(--gray-600, #475467)" }}
            >
              {props.text}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

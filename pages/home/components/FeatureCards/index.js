import style from "@/styles/Home.module.css";
export default function FeatureCards(props) {
  return (
    <div key={props.key} className={props.className}>
      <div
        className="th-bg-img d-flex flex-column justify-content-end th-br-24"
        style={{
          backgroundImage: `url(${props.src})`,
          height: `${props.height}`,
        }}
      >
        <div
          className="d-flex justify-content-center th-br-24"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%)",
          }}
        >
          <div
            className="mb-3 p-3 th-br-14 th-white-text"
            style={{
              border: "1px solid rgba(242, 244, 247, 0.58)",
              background: "rgba(255, 255, 255, 0.30)",
              backdropFilter: "blur(12px)",
              fontWeight: "700",
            }}
          >
            {props.text}
            {props.text1 === "" ? (
              ""
            ) : (
              <p className="th-18 th-fw-500 p-0 m-0">{props.text1}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

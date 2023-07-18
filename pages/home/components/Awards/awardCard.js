import style from "@/styles/Home.module.css";
export default function AwardCard(props) {
  return (
    <div key={props.key} className={props.className}>
      <div
        className="th-bg-img-contain d-flex flex-column justify-content-end th-br-16"
        style={{
          backgroundImage: `url(${props.src})`,
          height: `${props.height}`,
          // border: "1px solid var(--gray-500, #667085)",
        }}
      ></div>
      {/* <img></img> */}
    </div>
  );
}

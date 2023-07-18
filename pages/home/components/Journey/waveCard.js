import swimmer from "@/public/images/swimmer.png";
export default function WaveCard(props) {
  return (
    <div className={props.className}>
      <div
        className="th-bg-img th-br-24"
        style={{
          backgroundImage: `url(${swimmer.src})`,
          height: "220px",
        }}
      ></div>
    </div>
  );
}

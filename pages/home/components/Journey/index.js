import WaveCard from "./waveCard";

export default function Journey() {
  return (
    <div className="th-container mb-3 py-5">
      <div className="row" style={{ minHeight: "324px" }}>
        <WaveCard className="col-lg-2 col-md-4  col-sm-12 p-3 align-self-center" />
        <WaveCard className="col-lg-2 col-md-4  col-sm-12 p-3 align-self-start" />
        <WaveCard className="col-lg-2 col-md-4  col-sm-12 p-3 align-self-end" />
        <WaveCard className="col-lg-2 col-md-4  col-sm-12 p-3 align-self-center" />
        <WaveCard className="col-lg-2 col-md-4  col-sm-12 p-3 align-self-start" />
        <WaveCard className="col-lg-2 col-md-4  col-sm-12 p-3 align-self-end" />
      </div>
    </div>
  );
}

import style from "./progressBar.module.css";

export default function ProgressBar() {
  return (
    <div>
      <ul className={`${style.progress} row justify-content-around`}>
        <li className="col-3"></li>
        <li className="col-3"></li>
        <li className="col-3"></li>
        <li className="col-3"></li>
      </ul>
    </div>
  );
}

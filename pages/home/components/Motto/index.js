import MottoCard from "./mottoCard";
import bgmotto from "@/public/images/bg-motto.svg";
import cityMotto from "@/public/images/cityMotto.svg";
import locationMotto from "@/public/images/locationMotto.svg";
import teacherMotto from "@/public/images/teacherMotto.svg";
import studentMotto from "@/public/images/studentMotto.svg";
const values = [
  {
    bg: bgmotto,
    img: cityMotto,
    number: "90",
    text: "Campuses",
  },
  {
    bg: bgmotto,
    img: locationMotto,
    number: "25",
    text: "Cities",
  },
  {
    bg: bgmotto,
    img: teacherMotto,
    number: "7,000",
    text: "Teachers",
  },
  {
    bg: bgmotto,
    img: studentMotto,
    number: "75,000",
    text: "Students",
  },
];
export default function Motto() {
  return (
    <>
      <div className="th-container my-5 py-5">
        <div className="pb-2">
          <div className="col-md-10">
            <p className="th-28 th-fw-600">
              Orchids' motto is to turn learning into a joyful effort. It's our
              honour to continue this journey for more than two decades by
              inspiring young minds.
            </p>
          </div>
        </div>
        <div className="row pt-4">
          {values.map((ele) => {
            return (
              <MottoCard
                className="col-xl-3 col-lg-3 col-sm-6 col-6 p-3"
                bg={ele.bg.src}
                img={ele.img.src}
                number={ele.number}
                text={ele.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

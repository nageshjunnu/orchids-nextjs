import welcomeEllipse from "@/public/images/welcomeEllipse.svg";
import workingStartup from "@/public/images/workingStartup.png";
import Link from 'next/link';

export default function Activities() {
  return (
    <section className="p-0 bg-parallax position-relative overflow-hidden bg-dark-overlay-2"  data-jarallax-original-styles="background:url(assets/images/bg/04.jpg) no-repeat center center; background-size:cover;">
    <div className="text-center p-3">

      <h2 className="th-40 th-fw-700 mb-3">Activities</h2>
    { /* <p className="th-18 pt-2 th-fw-400">
        Nurturing roots through personal attention and<br></br> adding
        values that stay with students
      </p>*/}
    </div>
  	<div className="container-fluid">
  		<div className="row d-flex justify-content-between">

  			<div className="col-md-6 bg-primary-end position-relative text-center">
        <div className="px-3 px-md-0 py-5 py-md-8  position-relative ">
        {  /*<span className="font-alt fw-normal display-8 d-block mb-3">We are creating smart websites.</span>*/}
          <h2 className="display-6 th-fw-700 th-36 pb-2">Art</h2>
          <p>Art stimulates the imagination. To watch a child completely engrossed in arts is to recognize that the brain is active and driven by aesthetics and emotions, to make meaning, state opinions, and represent what matters to them <Link href={"/"} ><u>Read more...</u></Link></p>

          <img src="/images/activityImages/Teach-Responsibilty.png" width="300px"/>

        </div>
  			</div>

  			<div className="col-md-6 bg-primary-end position-relative p-0">
  				<div className="bg-black px-3 px-md-5 py-5 py-md-8 text-white position-relative  text-center">
          {  /*<span className="font-alt fw-normal display-8 d-block mb-3">We are creating smart websites.</span>*/}
            <h2 className="display-6 th-fw-700 th-36 pb-2">Music</h2>
            <p>Music is a significant part of every culture, tradition, religion, etc. Feelings are magnified when expressed through music. In collaboration with Furtados School of Music, ORCHIDS has introduced a curriculum that provides children with an opportunity to learn and play musical instruments, and express thoughts in a creative and artistic way <Link href={"/"} ><u>Read more...</u></Link></p>

            <img src="/images/activityImages/4-3.jpg" width="300px"/>
  				</div>
  			</div>


        <div className="col-md-6 bg-primary-end position-relative  p-0">
  				<div className="bg-black px-3 px-md-5 py-5 py-md-8 text-white position-relative  text-center">
          {  /*<span className="font-alt fw-normal display-8 d-block mb-3">We are creating smart websites.</span>*/}
            <h2 className="display-6 th-fw-700 th-36 pb-2">Dance</h2>
            <p>Children should be involved in at least one art form as it contributes to their happiness. And when combined with learning, it must never be ignored. At ORCHIDS, we believe dance is an integral aspect of a balanced education programme <Link href={"/"} ><u>Read more...</u></Link></p>

            <img src="/images/activityImages/dance1.jpg" width="300px"/>
  				</div>
  			</div>

        <div className="col-md-6 bg-primary-end position-relative text-center">
        <div className="px-3 px-md-5 py-5 py-md-8  position-relative">
        {  /*<span className="font-alt fw-normal display-8 d-block mb-3">We are creating smart websites.</span>*/}
          <h2 className="display-6 th-fw-700 th-36 pb-2">Swimming</h2>
          <p>Did you know that swimming enhances academic performance? Yes, swimming accelerates the growth of new brain cells, improving cognitive function and intellectual abilities <Link href={"/"} ><u>Read more...</u></Link></p>

          <img src="/images/activityImages/Swim1.jpg" width="300px"/>
        </div>
        </div>

        <div className="col-md-6 bg-primary-end position-relative text-center">
        <div className="px-3 px-md-5 py-5 py-md-8  position-relative">
        {  /*<span className="font-alt fw-normal display-8 d-block mb-3">We are creating smart websites.</span>*/}
          <h2 className="display-6 th-fw-700 th-36 pb-2">Taekwondo</h2>
          <p>Looking for a personality-building activity that builds strength, flexibility, and coordination while imparting valuable life-saving skills?

          The Taekwondo program at Orchids The International School is designed to <Link href={"/"} ><u>Read more...</u></Link></p>

          <img src="/images/activityImages/Taek4.jpg" width="300px"/>
        </div>
        </div>

        <div className="col-md-6 bg-primary-end position-relative  p-0">
          <div className="bg-black px-3 px-md-5 py-5 py-md-8 text-white position-relative  text-center">
          {  /*<span className="font-alt fw-normal display-8 d-block mb-3">We are creating smart websites.</span>*/}
            <h2 className="display-6 th-fw-700 th-36 pb-2">Theatre</h2>
            <p>‘YOUNG ORCHIDS THESPIANS’ is a uniquely designed curriculum for theatre followed at every branch of ORCHIDS International School. This curriculum is based on David Kolb’s ‘Experiential Learning Theory’, Lev Vygotsky’s ‘Social Constructivist and Collaborative Learning Theories” <Link href={"/"} ><u>Read more...</u></Link></p>

            <img src="/images/activityImages/theatre1.jpg" width="300px"/>
          </div>
        </div>


  		</div>
  	</div>

  </section>
  );
}

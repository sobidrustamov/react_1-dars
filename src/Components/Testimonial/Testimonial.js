import Avatar from "../../images/Avatar.png";
import Stars from "../../images/Star.png";

function Testimonial() {
  return (
    <div id="testimonial" className="px-[8rem] text-center py-[4rem]">
      <h4 className="uppercase text-blue-300">testimonial</h4>
      <h2 className="text-[3rem] font-bold w-1/2 mx-auto mb-[5rem]">
        See what they're saying about us
      </h2>
      <div className="test-cards flex flex-wrap justify-between gap-[2rem]">
        <div className="test-card w-1/4">
          <div className="card-title flex gap-4">
            <img src={Avatar} alt="" className="w-[40px] inline-block " />
            <h4 className="w-[120px] text-[1.2rem]">
              Cara Bedford
              <img src={Stars} alt="" className="w-full" />
            </h4>
          </div>
          <p className="text-left my-4">
            I have been using Wakanda for quite some time now and I have to say
            it has been the best freelance hiring platform that I've used. The
            quality of freelancers on this site is very high and they're totally
            reliable. I would highly recommend it!
          </p>
        </div>
        <div className="test-card w-1/4">
          <div className="card-title flex gap-4">
            <img src={Avatar} alt="" className="w-[40px] inline-block " />
            <h4 className="w-[120px] text-[1.2rem]">
              Cara Bedford
              <img src={Stars} alt="" className="w-full" />
            </h4>
          </div>
          <p className="text-left my-4">
            I have been using Wakanda for quite some time now and I have to say
            it has been the best freelance hiring platform that I've used. The
            quality of freelancers on this site is very high and they're totally
            reliable. I would highly recommend it!
          </p>
        </div>
        <div className="test-card w-1/4">
          <div className="card-title flex gap-4">
            <img src={Avatar} alt="" className="w-[40px] inline-block " />
            <h4 className="w-[120px] text-[1.2rem]">
              Cara Bedford
              <img src={Stars} alt="" className="w-full" />
            </h4>
          </div>
          <p className="text-left my-4">
            I have been using Wakanda for quite some time now and I have to say
            it has been the best freelance hiring platform that I've used. The
            quality of freelancers on this site is very high and they're totally
            reliable. I would highly recommend it!
          </p>
        </div>
        <div className="test-card w-1/4">
          <div className="card-title flex gap-4">
            <img src={Avatar} alt="" className="w-[40px] inline-block " />
            <h4 className="w-[120px] text-[1.2rem]">
              Cara Bedford
              <img src={Stars} alt="" className="w-full" />
            </h4>
          </div>
          <p className="text-left my-4">
            I have been using Wakanda for quite some time now and I have to say
            it has been the best freelance hiring platform that I've used. The
            quality of freelancers on this site is very high and they're totally
            reliable. I would highly recommend it!
          </p>
        </div>
        <div className="test-card w-1/4">
          <div className="card-title flex gap-4">
            <img src={Avatar} alt="" className="w-[40px] inline-block " />
            <h4 className="w-[120px] text-[1.2rem]">
              Cara Bedford
              <img src={Stars} alt="" className="w-full" />
            </h4>
          </div>
          <p className="text-left my-4">
            I have been using Wakanda for quite some time now and I have to say
            it has been the best freelance hiring platform that I've used. The
            quality of freelancers on this site is very high and they're totally
            reliable. I would highly recommend it!
          </p>
        </div>
        <div className="test-card w-1/4">
          <div className="card-title flex gap-4">
            <img src={Avatar} alt="" className="w-[40px] inline-block " />
            <h4 className="w-[120px] text-[1.2rem]">
              Cara Bedford
              <img src={Stars} alt="" className="w-full" />
            </h4>
          </div>
          <p className="text-left my-4">
            I have been using Wakanda for quite some time now and I have to say
            it has been the best freelance hiring platform that I've used. The
            quality of freelancers on this site is very high and they're totally
            reliable. I would highly recommend it!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

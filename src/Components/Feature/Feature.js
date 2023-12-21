import Icon from "../../images/Icon.png";
import Icon2 from "../../images/Icon2.png";
import Icon3 from "../../images/Icon3.png";

function Feature() {
  return (
    <div
      id="feature"
      className="px-[8rem] bg-blue-600 text-white py-[2.2rem] text-center"
    >
      <h4 className="uppercase ">feature</h4>
      <h2 className="w-2/5 text-[3rem] font-bold mx-auto mb-[3rem]">
        The benefit of using our platform
      </h2>
      <div className="cards flex gap-5 pb-[2rem]">
        <div className="card text-left">
          <img src={Icon} alt="" className="w-[5rem]" />
          <h3 className="text-[1.6rem] font-medium mt-4 mb-2">
            Professional & Fast
          </h3>
          <p>
            Search and hire the most talented freelancers to match your needs.
            No matter what you need done, we've got the perfect freelancer for
            you.
          </p>
        </div>
        <div className="card text-left">
          <img src={Icon2} alt="" className="w-[5rem]" />
          <h3 className="text-[1.6rem] font-medium mt-4 mb-2">
            Professional & Fast
          </h3>
          <p>
            Search and hire the most talented freelancers to match your needs.
            No matter what you need done, we've got the perfect freelancer for
            you.
          </p>
        </div>
        <div className="card text-left">
          <img src={Icon3} alt="" className="w-[5rem]" />
          <h3 className="text-[1.6rem] font-medium mt-4 mb-2">
            Professional & Fast
          </h3>
          <p>
            Search and hire the most talented freelancers to match your needs.
            No matter what you need done, we've got the perfect freelancer for
            you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;

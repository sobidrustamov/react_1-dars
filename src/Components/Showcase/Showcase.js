import Button from "../Header/Button";
import Showcase_bg from "../../images/showcase_bg.png";

function Showcase() {
  return (
    <div id="showcase" className="flex px-[8rem] items-center my-5">
      <div className="left  w-1/2 flex gap-4 flex-col items-start">
        <h1 className="text-[4rem] font-bold">
          Recruit top talented freelancer for your business
        </h1>
        <p className="w-3/5">
          Connect you to thoudsands of talented freelancer from any industry.
          You can have the best people in just few simple steps.
        </p>
        <Button />
      </div>
      <div className="right w-1/2 flex justify-center">
        <img src={Showcase_bg} alt="" className="w-1/2" />
      </div>
    </div>
  );
}

export default Showcase;

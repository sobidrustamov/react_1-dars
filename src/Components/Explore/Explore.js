import Man from "../../images/Man.png";

function Explore() {
  return (
    <div
      id="explore"
      className="flex items-center px-[8rem] pt-[4rem] bg-sky-300"
    >
      <div className="half w-1/2 flex flex-col gap-[1rem] items-start">
        <h2 className="text-[3rem] font-bold">
          Explore and hire talent from our platform
        </h2>
        <p className="w-3/5">
          We've got experts for every industry - all under one roof! You can
          find everything from WordPress developers to Graphic designers to
          copywriters and many more at Wakanda.
        </p>
        <a href="#" className="bg-blue-500 rounded-sm px-5 py-2 text-white">
          Explore now
        </a>
      </div>
      <div className="explore-half2 flex items-center justify-center w-1/2">
        <img src={Man} alt="" className="w-2/3" />
      </div>
    </div>
  );
}

export default Explore;

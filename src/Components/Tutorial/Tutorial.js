import CardsBio from "../../images/CardsBio.png";

function Tutorial() {
  return (
    <div id="tutorial" className="flex px-[8rem] py-[3rem] items-center">
      <div className="half w-1/2">
        <img src={CardsBio} alt="" className="w-2/3" />
      </div>
      <div className="half w-1/2">
        <h3 className="text-[3rem] font-bold">
          Wakanda is an easy platform to find talent
        </h3>
        <ol className="flex flex-col gap-3 my-3">
          <li>
            <span className="w-[30px] h-[30px] rounded-[50px] text-center mr-5 bg-blue-100 inline-block">
              1
            </span>
            Sign in to our website
          </li>
          <li>
            <span className="w-[30px] h-[30px] rounded-[50px] text-center mr-5 bg-blue-100 inline-block">
              2
            </span>
            Fill out neccesary information
          </li>
          <li>
            <span className="w-[30px] h-[30px] rounded-[50px] text-center mr-5 bg-blue-100 inline-block">
              3
            </span>
            Discover thoudsands of freelancers
          </li>
          <li>
            <span className="w-[30px] h-[30px] rounded-[50px] text-center mr-5 bg-blue-100 inline-block">
              4
            </span>
            View freelancer’s profile and hire
          </li>
          <li>
            <span className="w-[30px] h-[30px] rounded-[50px] text-center mr-5 bg-blue-100 inline-block">
              5
            </span>
            Complete payment & it’s time to work!
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Tutorial;

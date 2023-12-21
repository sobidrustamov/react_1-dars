import Women from "../../images/Women.png";

function Action() {
  return (
    <div id="action" className="px-[8rem] py-[6rem]">
      <div className="container flex bg-blue-600 items-center">
        <div className="half w-1/2 ">
          <img src={Women} alt="" className="w-2/3 mx-auto" />
        </div>
        <div className="half w-1/2  text-white ">
          <h4>WHAT ARE YOU WAITING FOR?</h4>
          <h2 className="text-[3rem] font-bold my-5">
            Find the talent to get your business growing
          </h2>
          <a href="#" className="bg-white rounded-xl px-5 py-2 text-black">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Action;

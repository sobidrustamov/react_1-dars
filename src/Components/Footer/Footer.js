import Logo from "../../images/Logo.png";

function Footer() {
  return (
    <div id="footer" className="flex py-5 px-[8rem] bg-black text-white">
      <div className="w-[30%]">
        <a
          href="#"
          className="flex items-center gap-2 text-[2rem] font-bold mb-5"
        >
          <img src={Logo} alt="logo" className="w-[3rem]" />
          Wakanda
        </a>
        <p>Copyright © 2022 Wakanda. All rights reserved</p>
      </div>
      <div className="w-[20%]">
        <h4 className="text-[2rem]">Company</h4>
        <ul>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>How it works</li>
          <li>For freelancer</li>
        </ul>
      </div>
      <div className="w-[15%]">
        <h4 className="text-[2rem]">Company</h4>
        <ul>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>How it works</li>
          <li>For freelancer</li>
        </ul>
      </div>
      <div className="w-[35%]">
        <form>
          <h4 className="text-[2rem]">Subscribe to our newsletter</h4>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-[88%] p-2 rounded-lg my-5"
          />
        </form>
      </div>
    </div>
  );
}

export default Footer;

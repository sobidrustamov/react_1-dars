import Nav from "./Nav";
import Logo from "../../images/Logo.png";

function Header() {
  return (
    <header className="py-[1rem]">
      <div className="container px-[8rem] flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-[2rem] font-bold">
          <img src={Logo} alt="logo" className="w-[3rem]" />
          Wakanda
        </a>
        <Nav />
      </div>
    </header>
  );
}

export default Header;

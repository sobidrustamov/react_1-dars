import Button from "./Button";

function Nav() {
  return (
    <nav>
      <ul className="flex gap-[14px] font-medium">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About US</a>
        </li>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">For Freelancer</a>
        </li>
        <li>
          <Button />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

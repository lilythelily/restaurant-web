import { Link } from "react-router-dom";

import chevron from "../assets/icons/chevron-right.svg";

const HamburgerMenu = () => {
  return (
    <ul className="hamburger-menu">
      <Link to="/">
        <div className="item-icon">
          <li>Home</li>
          <img src={chevron}></img>
        </div>
      </Link>

      <Link to="/">
        <div className="item-icon">
          <li>About</li>
          <img src={chevron}></img>
        </div>
      </Link>

      <Link to="/">
        <div className="item-icon">
          <li>Menu</li>
          <img src={chevron}></img>
        </div>
      </Link>

      <Link to="/booking">
        <div className="item-icon">
          <li>Reservation</li>
          <img src={chevron}></img>
        </div>
      </Link>

      <Link to="/">
        <div className="item-icon">
          <li>Order Online</li>
          <img src={chevron}></img>
        </div>
      </Link>

      <Link to="/">
        <div className="item-icon">
          <li>Login</li>
          <img src={chevron}></img>
        </div>
      </Link>
    </ul>
  );
};

export default HamburgerMenu;

import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import cart from "../assets/icons/cart.svg";
import login from "../assets/icons/Log in.svg";
import hamburger from "../assets/icons/hamburger.svg";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, []);

  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" width="148" height="40" />
        </Link>

        <nav>
          <ul className="header-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservation</Link>
            </li>
            <li></li>
          </ul>
        </nav>
        <div className="cart-login">
          <img src={cart} alt="cart" className="cart" />
          <button className="login-btn">
            <img src={login} alt="login"></img>Login
          </button>
          <img src={hamburger} alt="menu" id="hamburger" onClick={toggleMenu} />
        </div>
      </header>
      {isMenuOpen && (
        <div ref={menuRef} className="hamburger-menu-container">
          <HamburgerMenu />
        </div>
      )}
    </>
  );
};

export default Header;

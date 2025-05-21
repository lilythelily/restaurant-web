import { Link } from "react-router-dom";

import whiteLogo from "../assets/white-logo.png";
import contactEmail from "..//assets/icons/email.svg";
import phone from "..//assets/icons/phone-outline.svg";
import home from "..//assets/icons/home-01.svg";
import ig from "..//assets/icons/Instagram - Original.svg";
import fb from "..//assets/icons/facebook.svg";
import tik from "..//assets/icons/TikTok - Dark.svg";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={whiteLogo} alt="logo" id="white-logo" />
      </Link>

      <div className="footer-contents">
        <ul className="footer-ul">
          <Link to="/">
            <li className="footer-li">Home</li>
          </Link>

          <li>About</li>
          <li>Memu</li>
          <Link to="/booking">
            <li className="footer-li">Reservation</li>
          </Link>

          <li>Order Online</li>
          <li>Login</li>
        </ul>

        <div className="contact-section">
          <p className="contact">Contact Us</p>
          <div className="icon-contact">
            <img src={contactEmail} alt="email" />
            <p className="contact-text">hello@littlelemon.com</p>
          </div>
          <div className="icon-contact">
            <img src={phone} alt="phone" />
            <p className="contact-text">773-600-12011</p>
          </div>
          <div className="icon-contact">
            <img src={home} alt="home" />
            <p className="contact-text">
              5201 South Ellis Street Chicago, IL 60231
            </p>
          </div>
        </div>

        <div className="socials">
          <img src={ig} alt="instagram" />
          <img src={fb} alt="facebook" />
          <img src={tik} alt="tiktock" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

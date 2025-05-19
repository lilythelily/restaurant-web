import whiteLogo from '../assets/logo.jpg';
import contactEmail from '..//assets/icons/email.svg';
import phone from '..//assets/icons/phone-outline.svg';
import home from '..//assets/icons/home-01.svg';
import ig from '..//assets/icons/Instagram - Original.svg';
import fb from '..//assets/icons/facebook.svg';
import tik from '..//assets/icons/TikTok - Dark.svg';

const Footer = () => {
    return (
      <footer>
            <img src={whiteLogo} alt="logo" id="white-logo" />
            <div className="footer-contents">
        <ul className="footer-ul">
          <li>Home</li>
          <li>About</li>
          <li>Memu</li>
          <li>Reservation</li>
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
            </div></div>
            
            <div className="socials">
                <img src={ig} alt='instagram' />
                <img src={fb} alt='facebook' />
                <img src={tik} alt='tiktock'/>
            </div></div>
      </footer>
    );
}

export default Footer;
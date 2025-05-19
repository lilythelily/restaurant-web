import logo from "../assets/logo.jpg";
import cart from "../assets/icons/cart.svg";
import login from "../assets/icons/Log in.svg";

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo" width="148" height="40"/>
        <nav>
          <ul className="header-ul">
            <li><a href='#'>Home</a></li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
          </ul>
        </nav>
        <div className="cart-login">
          <img src={cart} alt="cart" className="cart" />
          <button className="login-btn">
            <img src={login} alt="login"></img>Login
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

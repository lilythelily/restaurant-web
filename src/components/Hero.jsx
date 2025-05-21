import { Link } from "react-router-dom";
import rightArrow from "../assets/icons/arrow-right.svg";

const Hero = () => {
  return (
    <div className="hero-section">
      <h1>
        Taste Authentic Cuisine
        <br />
        <span className="hero-span">at</span> Little Lemon
      </h1>

      <h2 className="hero-h2">
        Best Mediterranean Restaurant<div className="subtitle">in Chicago</div>
      </h2>
      <Link to="./booking">
        <button className="reserve-btn">
          Reserve a table
          <img src={rightArrow} alt="arrow" />
        </button>
      </Link>
    </div>
  );
};

export default Hero;

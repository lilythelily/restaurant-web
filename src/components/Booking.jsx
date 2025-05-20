import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TimePicker from "./TimePicker";
import Dietary from "./Dietary";
import Occasion from "./Occasion";
import homeIcon from "../assets/icons/home-04.svg";
import chevron from "../assets/icons/chevron-right.svg";
import progress1 from "../assets/progress1.png";
import calendar from "../assets/icons/calendar-02.svg";
import clock from "../assets/icons/clock-01.svg";
import users from "../assets/icons/users-profiles-03.svg";
import fork from "../assets/icons/restaurant.svg";
import celebration from "../assets/icons/celebration.svg";
import rightArrow from "../assets/icons/arrow-right.svg";


const BreadCrumb = () => {
  return (
    <div className="bread">
      <Link to="/">
        <img src={homeIcon} alt="home" />
      </Link>

      <img src={chevron} alt="chevron" />
      <p className="bread-text">Reserve a table</p>
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div className="progress">
      <img src={progress1} />
      <h2 className="clear-h2">Reserve a Table</h2>
    </div>
  );
};

const Select = ({ image, title, asterisk }) => {
  return (
    <div className="select-wrapper">
      <img src={image} className="circle-icon" />
      <p className="option-title">
        {title}
        <span className="asterisk">{asterisk}</span>
      </p>
    </div>
  );
};

const DatePicker = ({ month, date, day }) => {
  return (
    <div className="date-wrapper">
      <p className="month">{month}</p>
      <p className="date">{date}</p>
      <p className="day">{day}</p>
    </div>
  );
};

const DateContainer = () => {
  return (
    <div className="date-container">
      <DatePicker month="May" date="14" day="Wed" />
      <DatePicker month="May" date="15" day="Thu" />
    </div>
  );
};

const Counter = () => {
  const [guest, setGuest] = useState(0);

  const handleIncrement = () => {
    if (guest < 10) {
      setGuest(guest + 1);
    }
  };
  const handleDecrement = () => {
    if (guest > 0) {
      setGuest(guest - 1);
    }
  };
  return (
    <div className="guest-wrapper">
      <div className="minus" onClick={handleDecrement}>
        -
      </div>
      <div className="guest-number">{guest}</div>
      <div className="plus" onClick={handleIncrement}>
        +
      </div>
    </div>
  );
};

const LargeBtn = ({ text, icon }) => {
  return (
    <div className="btn-container">
      <button className="large-btn">
        {text}
        <img src={icon} />
      </button>
    </div>
  );
};

const Booking = () => {
  return (
    <>
      <BreadCrumb />
      <ProgressBar />
      <div className="booking-container">
        <div className="booking-main">
          <Select image={calendar} title="Select a Date" asterisk="*" />
          <DateContainer />

          <div className="item">
            <Select image={clock} title="Select Time" asterisk="*" />
            <TimePicker />
          </div>

          <div className="item">
            <Select image={users} title="Number of guests" asterisk="*" />
            <Counter />
          </div>
          <div className="item">
            <Select image={fork} title="Dietary Requirements" asterisk="" />
            <Dietary />
          </div>
          <div className="item">
            <Select image={celebration} title="Select Occasion" asterisk="" />
            <Occasion />
          </div>
        </div>
        <LargeBtn text="Continue" icon={rightArrow} />
      </div>
    </>
  );
};

export default Booking;

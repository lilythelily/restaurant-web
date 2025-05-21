import { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
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

const fetchAPI = function (date) {
  let result = [];
  let seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  let random = seededRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }
  return result;
};

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

const DatePicker = ({ value, onChange }) => {
  return (
    <input
      type="date"
      id="date-picker"
      value={value}
      onChange={onChange}
      required
    ></input>
  );
};

const TimeSelector = ({ value, onChange, availableTimes }) => {
  return (
    <select id="booking-time" value={value} onChange={onChange} required>
      {availableTimes.map((time, index) => (
        <option key={index} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
};

const Counter = () => {
  const [guest, setGuest] = useState(1);

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
        <img src={icon} alt="icon" />
      </button>
    </div>
  );
};

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const fetchRemoteAPI = async () => {
      try {
        const response = await fetch(REMOTE_API_URL);
        const text = await response.text();
        const module = { exports: {} };
        eval(text);
        setFetchAPI(() => module.exports.fetchAPI);
      } catch (error) {
        console.error("Error fetching remote API:", error);
        setFetchAPI(null);
      }
    };
    fetchRemoteAPI();
  }, []);

  useEffect(() => {
    if (selectedDate && fetchAPI) {
      const dateObj = new Date(selectedDate);
      const times = fetchAPI(dateObj);
      setAvailableTimes(
        times.length
          ? times
          : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
      );
      setSelectedTime("");
    }
  }, [selectedDate, fetchAPI]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BreadCrumb />
      <ProgressBar />
      <div className="booking-container">
        <div className="booking-main">
          <div className="item">
            <Select image={calendar} title="Select a Date" asterisk="*" />
            <DatePicker
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          <div className="item">
            <Select image={clock} title="Select Time" asterisk="*" />
            <TimeSelector
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              availableTimes={availableTimes}
            />
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
    </form>
  );
};

export default Booking;

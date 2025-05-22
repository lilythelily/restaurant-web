import { useState, useReducer, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const DatePicker = ({ value, onChange, error }) => {
  return (
    <input
      type="date"
      id="date-picker"
      value={value}
      onChange={onChange}
      required
      style={{
        border: error ? "2px solid #df591b" : "1px solid #bcbcbc",
      }}
    ></input>
  );
};

const TimeSelector = ({ value, onChange, availableTimes, error }) => {
  return (
    <select
      id="booking-time"
      value={value}
      onChange={onChange}
      style={{
        border: error ? " 2px solid #df591b" : "#f7f7f7",
      }}
    >
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
      <button className="large-btn" type="submit">
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
  const [guestCount, setGuestCount] = useState(1);
  const navigate = useNavigate();
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

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

  const submitForm = async (formData) => {
    if (window.submitForm) {
      const isSuccess = await window.submitForm(formData);
      if (isSuccess) {
        navigate("/form");
      } else {
        console.error("Form submission failed");
      }
    } else {
      console.error("submitForm function is not available");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDateError(false);
    setTimeError(false);

    if (!selectedDate) {
      setDateError(true);
    }
    if (!selectedTime) {
      setTimeError(true);
    } else {
      const formData = {
        date: selectedDate,
        time: selectedTime,
        guests: guestCount,
      };

      navigate("/form", { state: formData });
    }

    submitForm(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BreadCrumb />
      <ProgressBar />
      <section className="booking-container">
        <div className="booking-main">
          <div className="item">
            <Select image={calendar} title="Select a Date" asterisk="*" />
            <div className="picker-error">
              <DatePicker
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                error={dateError}
                data-testid="date-picker"
              />
              {dateError && <p className="error">Please select a date.</p>}
            </div>
          </div>

          <div className="item">
            <Select image={clock} title="Select Time" asterisk="*" />
            <div className="picker-error">
              <TimeSelector
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                availableTimes={availableTimes}
                error={timeError}
                data-testid="time-picker"
              />
              {timeError && <p className="error2">Please select a time.</p>}
            </div>
          </div>

          <div className="item">
            <Select image={users} title="Number of guests" asterisk="*" />
            <Counter
              guestCount={guestCount}
              setGuestCount={setGuestCount}
              data-testid="guest-picker"
            />
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
      </section>
    </form>
  );
};

export default Booking;

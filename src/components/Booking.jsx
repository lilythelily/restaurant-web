import { useState, useReducer } from "react";
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

const DatePicker = () => {
  const [date, setDate] = useState("");
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <input
      type="date"
      id="date-picker"
      value={date}
      onChange={handleDateChange}
    ></input>
  );
};

const TimeSelector = ({ value, onChange }) => {
  const availableTimes = [
    {
      id: 1,
      option: "17:00",
    },
    {
      id: 2,
      option: "18:00",
    },
    {
      id: 3,
      option: "19:00",
    },
    {
      id: 4,
      option: "20:00",
    },
    {
      id: 5,
      option: "21:00",
    },
    {
      id: 6,
      option: "22:00",
    },
  ];

  return (
    <>
      <select id="booking-time" value={value} onChange={onChange}>
        {availableTimes.map((time) => (
          <option key={time.id} value={time.option}>
            {time.option}
          </option>
        ))}
      </select>
    </>
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
  const initializeTimes = () => {
    return [
      {
        id: 1,
        option: "17:00",
      },
      {
        id: 2,
        option: "18:00",
      },
      {
        id: 3,
        option: "19:00",
      },
      {
        id: 4,
        option: "20:00",
      },
      {
        id: 5,
        option: "21:00",
      },
      {
        id: 6,
        option: "22:00",
      },
    ];
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "update_times":
        return action.availableTimes;
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleDateChange = (selectedDate) => {
    dispatch({ type: "update_times", availableTimes: initializeTimes() });
  };

  const [selectedTime, setSelectedTIme] = useState("");
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
            <DatePicker />
          </div>

          <div className="item">
            <Select image={clock} title="Select Time" asterisk="*" />
            <TimeSelector
              value={selectedTime}
              onChange={(e) => setSelectedTIme(e.target.value)}
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

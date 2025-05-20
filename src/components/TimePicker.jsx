import { useState } from "react";
import Booking from "./Booking";

const TimePicker = () => {
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

  const handleTime = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <>
      <select id="booking-time" value={selectedTime} onChange={handleTime}>
        {availableTimes.map((time) => (
          <option key={time.id} value={time.option}>
            {time.option}
          </option>
        ))}
      </select>
    </>
  );
};

export default TimePicker;

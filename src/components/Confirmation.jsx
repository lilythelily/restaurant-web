import { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

import homeIcon from "../assets/icons/home-04.svg";
import chevron from "../assets/icons/chevron-right.svg";
import progress3 from "../assets/progress3.png";
import calendar from "../assets/icons/calendar-02.svg";
import clock from "../assets/icons/clock-01.svg";
import users from "../assets/icons/users-profiles-03.svg";
import fork from "../assets/icons/restaurant.svg";
import cracker from "../assets/icons/celebration.svg";
import user from "../assets/icons/user-profile-02.svg";
import email from "../assets/icons/email-orange.svg";
import check from "../assets/icons/check-large.svg";
import feather from "../assets/icons/feather-02.svg";
import cross from "..//assets/icons/x.svg";
import Thanks from "../components/Thanks";

const BreadCrumb = () => {
  return (
    <div className="bread">
      <Link to="/">
        <img src={homeIcon} alt="home" />
      </Link>

      <img src={chevron} alt="chevron" />
      <Link to="/form">
        <p className="bread-text">Your Information</p>
      </Link>
      <img src={chevron} alt="chevron" />
      <p className="bread-text">Confirmation</p>
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div className="progress">
      <img src={progress3} />
      <h2 className="clear-h2">Confirmation</h2>
    </div>
  );
};

const ConfirmationTitle = ({ image, title, value }) => {
  return (
    <div className="confirmation-wrapper">
      <div className="img-title">
        {" "}
        <img src={image} />
        <p className="confirm-item">{title}</p>
      </div>

      <p className="response">{value}</p>
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

const OutlinedBtn = ({ text, icon }) => {
  return (
    <div className="btn-container">
      <button className="large-btn2">
        {text}
        <img src={icon} alt="icon" />
      </button>
    </div>
  );
};

const Confirmation = () => {
  return (
    <>
      <BreadCrumb />
      <ProgressBar />
      <form>
        <div className="contact-container">
          <div className="contact-label-field">
            <ConfirmationTitle
              image={calendar}
              title="Date"
              value="27 May, 2025"
            />
          </div>
          <div className="contact-label-field">
            <ConfirmationTitle image={clock} title="Time" value="19:30" />
          </div>
          <div className="contact-label-field">
            <ConfirmationTitle image={users} title="Guests" value="2" />
          </div>
          <div className="contact-label-field">
            <ConfirmationTitle
              image={user}
              title="Full Name"
              value="Eric Smith"
            />
          </div>
          <div className="contact-label-field">
            <ConfirmationTitle
              image={email}
              title="Email"
              value="es@gmail.com"
            />
          </div>
          <div className="contact-label-field">
            <ConfirmationTitle image={fork} title="Diet" value="Vegan" />
          </div>
          <div className="contact-label-field">
            <ConfirmationTitle
              image={cracker}
              title="Occasion"
              value="Birthday"
            />
          </div>
          <div className="contact-label-field">
            <ConfirmationTitle
              image={feather}
              title="Request"
              value="Could I reserve a table by the window?"
            />
          </div>
        </div>

        <LargeBtn text="Confirm reservation" icon={check} />
        <Link to="/">
          <OutlinedBtn text="Cancel" icon={cross} />
        </Link>
      </form>
      <div className="modal">
        <Thanks />
      </div>
    </>
  );
};

export default Confirmation;

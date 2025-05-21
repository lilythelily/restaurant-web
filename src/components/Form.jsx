import { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

import homeIcon from "../assets/icons/home-04.svg";
import chevron from "../assets/icons/chevron-right.svg";
import progress2 from "../assets/progress2.png";
import user from "../assets/icons/user-profile-02.svg";
import email from "../assets/icons/email-orange.svg";
import creditcard from "../assets/icons/card-02.svg";
import feather from "../assets/icons/feather-02.svg";
import rightArrow from "../assets/icons/arrow-right.svg";

const BreadCrumb = () => {
  return (
    <div className="bread">
      <Link to="/">
        <img src={homeIcon} alt="home" />
      </Link>

      <img src={chevron} alt="chevron" />
      <Link to="/booking">
        <p className="bread-text">Reserve a table</p>
      </Link>
      <img src={chevron} alt="chevron" />
      <p className="bread-text">Your Information</p>
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div className="progress">
      <img src={progress2} />
      <h2 className="clear-h2">Contact Information</h2>
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

const Form = () => {
  return (
    <>
      <BreadCrumb />
      <ProgressBar />
      <form>
        <div className="contact-container">
          <div className="label-field">
            <Select image={user} title="First Name" asterisk="*" />
            <input
              type="text"
              name="firstname"
              placeholder="Jane"
              className="contact-field"
            />
            <small>This field is required.</small>
          </div>
          <div className="label-field">
            <Select image={user} title="Last Name" asterisk="*" />
            <input
              type="text"
              name="lastname"
              placeholder="Mead"
              className="contact-field"
            />
            <small>This field is required.</small>
          </div>
          <div className="label-field">
            <Select image={email} title="Email Address" asterisk="*" />
            <input
              type="email"
              name="email"
              placeholder="jane@gmail.com"
              className="contact-field"
            />
            <small>This field is required.</small>
          </div>
          <div className="label-field">
            <Select image={creditcard} title="Credit Card" asterisk="*" />
            <input
              type="text"
              name="creditcard"
              placeholder="xxxx-xxxx-xxxx-xxxx"
              className="contact-field"
            />
            <small>This field is required.</small>
          </div>
          <div className="label-field">
            <Select image={feather} title="Special Requests" asterisk="" />
            <textarea
              type="textarea"
              name="textarea"
              placeholder="Could I reserve a table by the window?"
              className="textarea-field"
            />
          </div>
        </div>
        <Link to="/confirmation">
          <LargeBtn text="Continue" icon={rightArrow} />
        </Link>
      </form>
    </>
  );
};

export default Form;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <label className="option-title">
        {title}
        <span className="asterisk">{asterisk}</span>
      </label>
    </div>
  );
};

const LargeBtn = ({ text, icon, onClick }) => {
  return (
    <div className="btn-container">
      <button className="large-btn" type='submit' aria-label='On Click'>
        {text}
        <img src={icon} alt="icon" />
      </button>
    </div>
  );
};

const Form = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    creditcard: false,
  });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    creditcard: "",
    textarea: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let formIsValid = true;

    for (const key in formData) {
      if (
        ["firstname", "lastname", "email", "creditcard"].includes(key) &&
        formData[key].trim() === ""
      ) {
        newErrors[key] = true;
        formIsValid = false;
      } else {
        newErrors[key] = false;
      }
    }
    setErrors(newErrors);

    if (formIsValid) {
      navigate("/confirmation");
    }
  };

  return (
    <>
      <BreadCrumb />
      <ProgressBar />
      <form onSubmit={handleFormSubmit}>
        <div className="contact-container">
          <div className="label-field">
            <Select image={user} title="First Name" asterisk="*" />
            <input
              type="text"
              name="firstname"
              placeholder="Jane"
              className="contact-field"
              value={formData.firstname}
              onChange={handleChange}
              style={{
                border: errors.firstname ? "2px solid #df591b" : "1px solid #d4d4d4",
              }}
            />
            {errors.firstname && <small>This field is required.</small>}
          </div>
          <div className="label-field">
            <Select image={user} title="Last Name" asterisk="*" />
            <input
              type="text"
              name="lastname"
              placeholder="Mead"
              className="contact-field"
              value={formData.lastname}
              onChange={handleChange}
              style={{
                border: errors.lastname ? "2px solid #df591b" : "1px solid #d4d4d4",
              }}
            />
            {errors.lastname && <small>This field is required.</small>}
          </div>
          <div className="label-field">
            <Select image={email} title="Email Address" asterisk="*" />
            <input
              type="email"
              name="email"
              placeholder="jane@gmail.com"
              className="contact-field"
              value={formData.email}
              onChange={handleChange}
              style={{
                border: errors.email ? "2px solid #df591b" : "1px solid #d4d4d4",
              }}
            />
            {errors.email && <small>Please enter a valid Email.</small>}
          </div>
          <div className="label-field">
            <Select image={creditcard} title="Credit Card" asterisk="*" />
            <input
              type="text"
              name="creditcard"
              placeholder="xxxx xxxx xxxx xxxx"
              className="contact-field"
              value={formData.creditcard}
              onChange={handleChange}
              style={{
                border: errors.creditcard ? "2px solid #df591b" : "1px solid #d4d4d4",
              }}
            />
            {errors.creditcard && <small>Please enter a valid number.</small>}
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

        <LargeBtn text="Continue" icon={rightArrow} />
      </form>
    </>
  );
};

export default Form;

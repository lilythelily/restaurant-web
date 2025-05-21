import { useState, useEffect, useRef } from "react";
import cracker from "../assets/cracker.png";
import logo from "../assets/logo.jpg";

const Thanks = () => {
  const [isVisible, setIsVisible] = useState(true);
  const popupRef = useRef(null);

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="popup" onClick={toggleModal}>
      <img src={logo} width="200" alt="logo" />
      <img src={cracker} width="300" alt="cracker" />
      <h2 className="thanks-h2">Thank you!</h2>
      <p className="message">We look forward to your visit.</p>
    </div>
  );
};

export default Thanks;

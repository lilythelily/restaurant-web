import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import './components/Booking.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Booking from './components/Booking';
import Form from './components/Form';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/form" element={<Form />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

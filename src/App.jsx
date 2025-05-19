import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedMenu from "./components/FeaturedMenu";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <FeaturedMenu />
        <Testimonials />
        <About />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;

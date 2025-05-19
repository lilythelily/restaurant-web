import { useState } from "react";
import "./App.css";
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';

function App() {
  return (
    <>
<Header/>
<Hero/>
      <main>
<FeaturedMenu/>
      </main>
      <footer></footer>
</>
  );
}

export default App;

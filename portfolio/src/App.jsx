import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero.jsx";
import "../tailwind.config.js";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;

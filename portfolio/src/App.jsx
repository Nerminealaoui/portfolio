import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero.jsx";
import "../tailwind.config.js";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-6">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;

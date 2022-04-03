import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero id="home" />
      <About id="about" />
    </div>
  );
};

export default App;

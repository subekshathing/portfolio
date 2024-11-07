import React from "react";
import Navbars from "./components/navbar/Navbar/Navbars";
import Hero from "./components/navbar/Hero/Hero";
import About from "./components/navbar/About/About";
import Services from "./components/navbar/Services/Services";
import MyWork from "./components/navbar/MyWork/MyWork";

const App = () => {
  return (
    <div>
      <Navbars />
      <Hero />
      <About />
      <Services />
      <MyWork />
    </div>
  );
};

export default App;

import React from "react";
import Navbars from "./components/navbar/Navbar/Navbars";
import Hero from "./components/navbar/Hero/Hero";
import About from "./components/navbar/About/About";
import Services from "./components/navbar/Services/Services";
import MyWork from "./components/navbar/MyWork/MyWork";
import Contact from "./components/navbar/Contact/Contact";
import Footer from "./components/navbar/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbars />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

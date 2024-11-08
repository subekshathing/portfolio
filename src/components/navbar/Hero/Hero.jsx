import React from "react";
import "./Hero.css";
import profile_img from "../../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span> Im Shuvechchha Thing, Full-Stack Developer (MERN Stack)</span>
      </h1>

      <p>
        I am a skilled Full-Stack Developer with expertise in the MERN stack
        (MongoDB, Express.js, React.js, Node.js). I have experience building
        dynamic web applications, developing RESTful APIs, and creating
        responsive, user-friendly interfaces.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">my resume</div>
      </div>
    </div>
  );
};

export default Hero;

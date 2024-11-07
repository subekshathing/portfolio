import React from "react";
import "./Hero.css";
import profile_img from "../../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Im alex, frontend develepor based in usa</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
        natus temporibus eum atque, sint ad ipsa illo laborum dolore
        reprehenderit totam facere quas impedit aspernatur rem. Illum,
        dignissimos maiores.
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

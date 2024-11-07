import React from "react";
import "./About.css";
import theme_pattern from "../../../assets/theme_pattern.svg";
import profile_img from "../../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              repudiandae expedita voluptatem dignissimos, maiores aliquid
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              suscipit possimus minus obcaecati expedita voluptas itaque atque
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML &CSS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

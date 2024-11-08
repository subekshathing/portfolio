import React from "react";
import "./About.css";
import theme_pattern from "../../../assets/theme_pattern.svg";
import profile_img from "../../../assets/profile_img.svg";

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
              I am a passionate Full-Stack Developer specializing in the MERN
              stack (MongoDB, Express.js, React.js, Node.js). With a strong
              foundation in both front-end and back-end development.
            </p>
            <p>
              I focus on building scalable, high-performance web applications
              that deliver seamless user experiences. My expertise lies in
              designing and implementing RESTful APIs, managing databases, and
              developing responsive, intuitive UIs.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Front-End: React.js, HTML, CSS, JavaScript (ES6+)</p>
              <hr style={{ width: "90%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Back-End: Node.js, Express.js</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Database: MongoDB, Mongoose</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Tools: Git, npm, Postman</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Other: RESTful APIs, Responsive Design, Agile Development</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

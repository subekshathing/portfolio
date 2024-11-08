import React from "react";
import "./Contact.css";
import theme_pattern from "../../../assets/theme_pattern.svg";
import mail_icon from "../../../assets/mail_icon.svg";
import location_icon from "../../../assets/location_icon.svg";
import call_icon from "../../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "94f6a59c-2b5e-4bec-a051-755a45d759e7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>
            Have a project in mind or need help with your next digital venture?
            We’re here to turn your ideas into reality. Reach out to us today,
            and let’s start a conversation about how we can work together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>shuvechchhathing@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+977 9865479747</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">your name</label>
          <input type="text" placeholder="enter your name" name="name" />
          <label>Your email</label>
          <input type="email" placeholder="enter your email" name="email" />
          <label htmlFor="">write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="enter your message here"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

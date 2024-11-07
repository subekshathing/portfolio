import React from "react";
import "./Footer.css";
import footer_logo from "../../../assets/footer_logo.svg";
import user_icon from "../../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            minima ab reiciendis nulla veritatis eum blanditiis debitis
            doloribus magni non, omnis laborum iusto possimus, ad vero
            perferendis explicabo ex? Repudiandae.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              id=""
            />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@2024 subu. All rights reserved</p>
        <div className="footer-bottom-right">
          <p>term of services</p>
          <p>privacy policy</p>
          <p>connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

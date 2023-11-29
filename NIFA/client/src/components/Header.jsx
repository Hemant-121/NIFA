import React from "react";
import "./Header.css";

const Header = () => {
  return (
      <div className="Header ">
        <div className="branding">
          <p>Welcome to the National Institute of Fine Arts</p>
        </div>

        <div className="contact">
          <a href="/">
            <i className="fa solid fa-phone"></i>9555112200
          </a>

          <a href="/">
            <i className="fa solid fa-phone"></i>9555112200
          </a>
        </div>

        <div className="email">
          <i className="fa-regular fa-envelope"></i>
          <p>admission@nifafineearts.com</p>
        </div>

        <div className="social-media">
          <ul>
            <li>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Header;

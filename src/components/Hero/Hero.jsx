import "./Hero.css";
import React from "react";
import EmailBox from "../EmailBox/EmailBox";

const Hero = () => {
  return (
    <div className="h-wrapper">
      <div className="container">
        <div className="h-container">
          <div className="h-left">Hero section</div>

          <div className="h-right">
            <div className="h-title">
              <span>Redefine How</span>
              <span>You Grow your</span>
              <span>Digital Business</span>
            </div>

            <div className="h-description">
              Revenue based funding and execution support designed for early
              stage founders
            </div>

            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

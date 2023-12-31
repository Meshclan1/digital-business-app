"use client";

import React from "react";
import "./WhoWeInvest.css";
import { whoWeInvest } from "@/src/utils/data";

const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          <div className="wwi-left">
            <div className="head">
              <span className="tag">Who we invest in</span>
              <span className="title">
                Digital businesses
                <br /> with early traction
              </span>
            </div>

            <div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <div className="wwi-feature" key={i}>
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="wwi-right">
            <img src="persons.png" alt="persons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;

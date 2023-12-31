"use client";

import React from "react";
import "./WhoWeInvest.css";
import { whoWeInvest } from "@/src/utils/data";

import { motion } from "framer-motion";
import {
  tagVariants,
  desVariants,
  titleVariants,
} from "@/src/utils/animations";

const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          <div className="wwi-left">
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="tag"
              >
                Who we invest in
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="title"
              >
                Digital businesses
                <br /> with early traction
              </motion.span>
            </div>

            <motion.div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <div className="wwi-feature" key={i}>
                  <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="des"
                  >
                    {feature.title}
                  </motion.span>
                  <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className="text"
                  >
                    {feature.des}
                  </motion.span>
                </div>
              ))}
            </motion.div>
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

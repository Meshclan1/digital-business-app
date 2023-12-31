"use client";
import "./WhatWeDo.css";
import React from "react";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  tagVariants,
  desVariants,
  titleVariants,
  containerVariants,
} from "@/src/utils/animations";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileinview={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              What we do
            </motion.span>
            <motion.span
              initial="offscreen"
              whileinview={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Empowering founders with non dilutive capital and expertise
            </motion.span>
            <motion.span
              initial="offscreen"
              whileinview={"onscreen"}
              variants={desVariants}
              className="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>
          <div className="wwd-blocks">
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileinview={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                initial="offscreen"
                whileinview={"onscreen"}
                variants={desVariants}
                className="text"
              >
                Fund recurring growth expenses e.g. customer acquisition,
                inventory
              </motion.span>

              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileinview={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <motion.span>{feature.title}</motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileinview={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                initial="offscreen"
                whileinview={"onscreen"}
                variants={desVariants}
                className="text"
              >
                Fund one-offs to scale e.g. product, hiring
              </motion.span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileinview={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <motion.span>{feature.title}</motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileinview={"onscreen"}
            variants={containerVariants(0.3)}
            className="wwd-support"
          >
            <div>
              <span
                initial="offscreen"
                whileinview={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Growth Support
              </span>
              <span className="des">
                Data Insights & full stack expertise to supercharge growth
              </span>
            </div>

            <div>
              <motion.span className="text">
                Actionable data insights by connecting revenue, marketing and
                social media platforms
              </motion.span>
              <motion.span className="text">
                On demand execution expertise at cost or revenue share across
                proposition design, engineering, marketing analytics,
                partnerships, branding, intellectual property, market expansion,
                and talent management
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

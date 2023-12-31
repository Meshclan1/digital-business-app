"use client";
import React, { useRef } from "react";
import "./BrandingVideo.css";
import { motion, useTransform, useScroll } from "framer-motion";

const BrandingVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["startend", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="bv-container">
      <div className="container">
        <motion.video
          className="bv-video"
          ref={ref}
          loop
          muted
          autoPlay
          controls=""
          style={{ scale }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};

export default BrandingVideo;

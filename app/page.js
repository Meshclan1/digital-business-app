"use client";

import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import "./page.css";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import WhoWeInvest from "@/src/components/WhoWeInvest/WhoWeInvest";
import Footer from "@/src/components/Footer/Footer";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <WhoWeInvest />
      <Footer />
    </motion.div>
  );
}

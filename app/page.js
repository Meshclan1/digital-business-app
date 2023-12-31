import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import "./page.css";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import WhoWeInvest from "@/src/components/WhoWeInvest/WhoWeInvest";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      {/* <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amout: 0.4 }}
      /> */}

      <WhoWeInvest />
    </div>
  );
}

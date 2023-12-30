import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import "./page.css";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
    </div>
  );
}

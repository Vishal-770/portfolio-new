import { ContactSection } from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import TechSkills from "@/components/TechSkills";

import { TimelineDemo } from "@/components/TimeLine";
import React from "react";

const Home = () => {
  return (
    <>
      {" "}
      <HeroSection />
      <Projects />
      <TimelineDemo />
      <TechSkills />
      <ContactSection />
    </>
  );
};

export default Home;

"use client";
import { ContactSection } from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import TechSkills from "@/components/TechSkills";
import { ReactLenis, useLenis } from "lenis/react";
import { TimelineDemo } from "@/components/TimeLine";
import React from "react";

const Home = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  return (
    <>
      <ReactLenis root /> 
      <HeroSection />
      <Projects />
      <TimelineDemo />
      <TechSkills />
      <ContactSection />
    </>
  );
};

export default Home;

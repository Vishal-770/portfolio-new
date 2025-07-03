"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageAnim: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97],
      delay: 0.5,
    },
  },
  hover: {
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const buttonAnim: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  pressed: { scale: 0.98 },
};

const HeroSection = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-24 py-10 lg:py-35 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* Text Content */}
      <motion.div
        className="flex flex-col gap-6 max-w-2xl text-center lg:text-left"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="font-exo-2 text-3xl sm:text-4xl font-bold text-gray-700 lg:text-5xl"
          variants={item}
        >
          Hey, I'm Vishal 👋🏻
        </motion.h1>

        <motion.h2
          className="font-exo-2 text-4xl sm:text-5xl font-extrabold text-black lg:text-5xl"
          variants={item}
        >
          <span className="text-main-text">Full Stack</span> Web Developer
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 font-exo-2 lg:text-2xl"
          variants={item}
        >
          I'm a full stack developer based in India. I'll help you build
          beautiful, fast, and user-friendly websites your users will love.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
          variants={item}
        >
          <Link href={"/contact"}>
            <motion.button
              className="px-6 py-3 bg-main-text text-white rounded-xl font-semibold hover:bg-main-text/90 transition"
              variants={buttonAnim}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
            >
              Get In Touch
            </motion.button>
          </Link>
          <Link href={"/projects"}>
            <motion.button
              className="px-6 py-3 border border-gray-700 text-gray-700 rounded-xl font-semibold hover:bg-black/80 hover:text-white transition"
              variants={buttonAnim}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
            >
              Browse Projects
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      {/* Image Section */}
      <motion.div
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-inner"
        variants={imageAnim}
        initial="hidden"
        animate="show"
        whileHover="hover"
      >
        <Image
          src="/profileimage.jpg"
          alt="Profile image"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

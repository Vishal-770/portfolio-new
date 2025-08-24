"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants (no changes here)
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
    // The outer section now only handles the full width and overflow.
    <section className="w-full overflow-hidden">
      {/* This new inner div constrains the content width and centers it.
        - max-w-7xl: Sets a maximum width of 1280px.
        - mx-auto: Centers the div horizontally.
        - All flex, padding, and layout classes are moved here.
      */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-35 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="flex flex-col gap-6 max-w-2xl text-center lg:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="font-exo-2 text-3xl sm:text-4xl font-bold text-muted-foreground lg:text-5xl"
            variants={item}
          >
            Hey, I'm Vishal 👋🏻
          </motion.h1>

          <motion.h2
            className="font-exo-2 text-4xl sm:text-5xl font-extrabold text-foreground lg:text-5xl"
            variants={item}
          >
            <span className="text-primary">Full Stack</span> Web Developer
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground font-exo-2 lg:text-2xl"
            variants={item}
          >
            I'm a full stack developer based in India. I'll help you build
            beautiful, fast, and user-friendly websites your users will love.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
            variants={item}
          >
            <motion.a
              href="https://deuiedwjlkqpvuylcejf.supabase.co/storage/v1/object/public/storage/VISHAL_PRABHU_resume%20.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition text-center"
              variants={buttonAnim}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
            >
              Download CV
            </motion.a>

            <Link href="/projects">
              <motion.button
                className="px-6 py-3 border border-border text-foreground rounded-xl font-semibold hover:bg-secondary hover:text-secondary-foreground transition"
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
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-96 bg-muted rounded-3xl overflow-hidden shadow-inner"
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
      </div>
    </section>
  );
};

export default HeroSection;

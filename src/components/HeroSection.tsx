"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageAnim: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonAnim: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  pressed: { scale: 0.98, y: 0 },
};

const floatingAnim: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          variants={floatingAnim}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          variants={floatingAnim}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <motion.div
          className="flex flex-col gap-8 max-w-2xl text-center lg:text-left z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit mx-auto lg:mx-0 backdrop-blur-sm"
            variants={item}
          >
            ✨ Available for new projects
          </motion.div>

          <motion.h1
            className="font-bold text-4xl sm:text-5xl lg:text-7xl text-foreground leading-tight tracking-tight"
            variants={item}
          >
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Vishal
            </span>{" "}
            👋🏻
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-relaxed"
            variants={item}
          >
            <span className="text-primary font-bold">Full Stack</span> Web
            Developer
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl"
            variants={item}
          >
            I'm a full stack developer based in India. I'll help you build
            beautiful, fast, and user-friendly websites your users will love.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            variants={item}
          >
            <motion.a
              href="https://deuiedwjlkqpvuylcejf.supabase.co/storage/v1/object/public/storage/VISHAL_PRABHU_resume%20.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-center overflow-hidden shadow-lg shadow-primary/25 border border-primary/20"
              variants={buttonAnim}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <Link href="/projects">
              <motion.button
                className="group px-8 py-4 border-2 border-border/50 text-foreground rounded-2xl font-semibold hover:border-primary/50 transition-all duration-300 backdrop-blur-sm bg-background/50 shadow-lg hover:shadow-xl"
                variants={buttonAnim}
                initial="rest"
                whileHover="hover"
                whileTap="pressed"
              >
                <span className="group-hover:text-primary transition-colors duration-300">
                  Browse Projects
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10"
          variants={imageAnim}
          initial="hidden"
          animate="show"
          whileHover="hover"
        >
          <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary via-primary/50 to-secondary shadow-2xl shadow-primary/20">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-background rounded-3xl overflow-hidden">
              <Image
                src="/profileimage.jpg"
                alt="Vishal Prabhu - Full Stack Developer"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full shadow-lg"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full shadow-lg"
            animate={{
              y: [5, -5, 5],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;

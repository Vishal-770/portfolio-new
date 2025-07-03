"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Lens } from "./magicui/lens";
import { LinkPreview } from "./ui/link-preview";

const projects = [
  {
    title: "FileDrop – File Sharing App",
    description:
      "A full-stack file sharing platform with password protection, team collaboration, and secure uploads.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "MongoDB",
      "Clerk",
      "ShadCN UI",
      "TanStack Query",
    ],
    imageUrl: "/fileshare.png",
    projectUrl: "https://file-share-topaz-kappa.vercel.app/",
  },
  {
    title: "URL Shortener",
    description:
      "Shorten long URLs with analytics for click tracking and engagement insights.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "TanStack Query",
      "MongoDB",
      "Clerk",
    ],
    imageUrl: "/url.png",
    projectUrl: "https://url-shortener-new-five.vercel.app",
  },
  {
    title: "Netflix Clone",
    description:
      "A sleek Netflix-inspired front-end application for browsing and watching trailers.",
    techStack: ["React", "TanStack Query", "React Router DOM", "Tailwind CSS"],
    imageUrl: "/netflix.png",
    projectUrl: "https://movieapp077.netlify.app",
  },
  {
    title: "AI Assistant App",
    description:
      "AI-powered assistant using Google's Gemini API for text generation and interaction.",
    techStack: ["React", "Gemini API", "Axios"],
    imageUrl: "/ai.png",
    projectUrl: "https://vishal-770.github.io/AI-APP/",
  },
];

// Animation Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1800px] mx-auto">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight text-main-text sm:text-5xl"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-lg text-black"
        >
          Here are some of the projects I&#39;ve worked on recently
        </motion.p>
      </div>

      <div className="space-y-12 lg:space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-8 ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            }`}
          >
            <div
              className={`lg:col-span-2 w-full aspect-[16/9] overflow-hidden rounded-lg ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}
            >
              <Lens>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Lens>
            </div>

            <Card
              className={`lg:col-span-3 h-full flex flex-col group transition-all duration-300 hover:shadow-xl ${
                index % 2 === 0 ? "" : "lg:order-1"
              }`}
            >
              <CardContent className="flex-1 flex flex-col p-8">
                <CardTitle className="text-3xl font-bold text-main-text">
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-4 text-lg text-black">
                  {project.description}
                </CardDescription>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-base font-medium border-main-text/20 text-black hover:bg-main-text/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <CardFooter className="px-0 pb-0 pt-8 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="gap-2 border-main-text text-main-text hover:bg-main-text/10 hover:text-main-text"
                  >
                    <LinkPreview url={project.projectUrl}>
                      View Project <ArrowUpRight className="h-4 w-4" />
                    </LinkPreview>
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

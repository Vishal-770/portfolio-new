"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  motion,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Lens } from "./magicui/lens";
import { LinkPreview } from "./ui/link-preview";
import { useState } from "react";

const projects = [
  {
    title: "FileDrop – File Sharing App",
    description:
      "A full-stack file sharing platform with password protection, team collaboration, and secure uploads. Built with modern technologies for seamless user experience.",
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
    category: "Full Stack",
  },
  {
    title: "URL Shortener",
    description:
      "Shorten long URLs with analytics for click tracking and engagement insights. Features real-time analytics dashboard and custom domain support.",
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
    category: "Web App",
  },
  {
    title: "Netflix Clone",
    description:
      "A sleek Netflix-inspired front-end application for browsing and watching trailers. Includes advanced filtering, search functionality, and responsive design.",
    techStack: ["React", "TanStack Query", "React Router DOM", "Tailwind CSS"],
    imageUrl: "/netflix.png",
    projectUrl: "https://movieapp077.netlify.app",
    category: "Frontend",
  },
  {
    title: "AI Assistant App",
    description:
      "AI-powered assistant using Google's Gemini API for text generation and interaction. Features conversational UI and contextual responses.",
    techStack: ["React", "Gemini API", "Axios"],
    imageUrl: "/ai.png",
    projectUrl: "https://vishal-770.github.io/AI-APP/",
    category: "AI/ML",
  },
];

// Enhanced Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const projectVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Floating Background Elements Component
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      animate={{
        x: [0, -80, 0],
        y: [0, 60, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
      animate={{
        x: [0, 120, 0],
        y: [0, -80, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
);

// Interactive Project Card Component
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), {
    stiffness: 100,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), {
    stiffness: 100,
    damping: 15,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={projectVariants}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        !isEven ? "lg:grid-flow-col-dense" : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <motion.div
        className={`lg:col-span-6 ${!isEven ? "lg:col-start-7" : ""}`}
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
      >
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.div
            className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-gradient-to-br from-background via-card to-muted border border-border/50 backdrop-blur-sm"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <Lens>
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{
                  scale: useTransform(mouseX, [-100, 100], [1, 1.02]),
                }}
              />
            </Lens>
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </motion.div>

      {/* Project Details */}
      <motion.div
        className={`lg:col-span-6 ${
          !isEven ? "lg:col-start-1 lg:row-start-1" : ""
        }`}
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
      >
        <Card className="h-full bg-gradient-to-br from-background/80 via-card/50 to-background/80 backdrop-blur-xl border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
          <CardContent className="p-8 lg:p-10">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="mb-4"
            >
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20 font-medium px-3 py-1"
              >
                {project.category}
              </Badge>
            </motion.div>

            {/* Project Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary/70 bg-clip-text text-transparent"
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
              className="mb-8"
            >
              <h4 className="text-sm font-semibold text-foreground/80 mb-4 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-muted to-muted/80 text-foreground hover:from-primary/20 hover:to-primary/10 hover:text-primary transition-all duration-300 font-medium px-3 py-1.5 border border-border/30"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 border-0 px-6 py-3"
              >
                <LinkPreview url={project.projectUrl}>
                  <span className="flex items-center gap-2">
                    View Project
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </span>
                </LinkPreview>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Gradient Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 lg:mb-28"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4"
          >
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20 font-medium px-4 py-2 text-sm"
            >
              Featured Work
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
          >
            Selected Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A collection of projects that showcase my passion for creating
            <span className="text-primary font-medium">
              {" "}
              exceptional digital experiences
            </span>
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-20 lg:space-y-32"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20 lg:mt-32"
        >
          <Card className="inline-block bg-gradient-to-br from-background/80 via-card/50 to-background/80 backdrop-blur-xl border border-border/20 shadow-xl p-8 lg:p-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's create something amazing together
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

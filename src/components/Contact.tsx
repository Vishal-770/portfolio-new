"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";

export const ContactSection = () => {
  const socialLinks = [
    {
      label: "Email",
      icon: Mail,
      href: "mailto:vishal.p2024@vitstudent.ac.in",
      color: "text-rose-500 hover:text-rose-600",
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/vishal-770",
      color:
        "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vishal-prabhu-130b1a323/",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      label: "Twitter",
      icon: Twitter,
      href: "https://x.com/Vishal_7707",
      color: "text-sky-500 hover:text-sky-600",
    },
  ];
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="w-full text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold  bg-clip-text bg-gradient-to-r from-primary to-primary/70 mb-5 text-primary"
          >
            Let&#39;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Interested in working together or just want to say hello? Reach out
            via the form or connect through one of my social platforms.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full p-8 rounded-xl border border-border/50 bg-background shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              Connect With Me
            </h3>
            <div className="space-y-5">
              {socialLinks.map(({ label, icon: Icon, href, color }) => (
                <motion.a
                  key={label}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${color}`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-lg font-medium">{label}</span>
                </motion.a>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Typically responds within 24 hours.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full p-8 rounded-xl border border-border/50 bg-background shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              Send a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="border-border/70 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="border-border/70 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="Project inquiry, question, etc."
                  className="border-border/70 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  className="min-h-[140px] border-border/70 focus:border-primary"
                />
              </div>
              <Button className="w-full mt-4 hover:scale-99 bg-primary text-primary-foreground hover:bg-primary/95">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-20 -z-10" />
    </section>
  );
};

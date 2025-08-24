"use client";

import { MailPlus, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.17, 0.67, 0.83, 0.67], // cubic-bezier for easeOut
    },
  }),
};

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const renderLinks = (isMobile = false) =>
    navItems.map((item, i) => (
      <motion.div
        key={item.href}
        custom={i}
        initial="hidden"
        animate="visible"
        variants={linkVariants}
      >
        <Link 
          href={item.href} 
          className="no-cursor"
          onClick={() => isMobile && setIsOpen(false)}
        >
          <h1
            className={`${
              pathname === item.href ? "text-primary text-xl" : "text-xl text-foreground"
            } font-bold hover:text-primary font-exo-2 transition-colors ${
              isMobile ? "w-full py-2" : ""
            }`}
          >
            {item.name}
          </h1>
        </Link>
      </motion.div>
    ));

  return (
    <nav className="w-full px-6 py-4 bg-background border-b border-border relative">
      <div className="flex w-full items-center justify-between">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="font-bold font-exo-2 text-3xl text-foreground"
        >
          Vishal
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-10 items-center">
          {renderLinks()}
        </div>

        {/* Icons on the right */}
        <div className="flex items-center gap-4">
          <AnimatedThemeToggler className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent" />
          <Link href="/contact">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/90 transition-colors hidden sm:block"
            >
              <MailPlus />
            </motion.div>
          </Link>

          {/* Hamburger Menu */}
          <button
            className="sm:hidden z-50 text-foreground hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-background dark:bg-card border-t border-border flex flex-col gap-5 items-start px-6 py-4 sm:hidden z-40 shadow-lg"
          >
            {renderLinks(true)}
            <div className="w-full pt-4 border-t border-border">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <div className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <MailPlus size={20} />
                  <span className="font-bold font-exo-2 text-xl">Contact</span>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

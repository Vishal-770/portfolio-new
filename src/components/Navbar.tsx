"use client";

import { MailPlus, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";

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
        <Link href={item.href} className="no-cursor">
          <h1
            className={`${
              pathname === item.href ? "text-main-text text-xl" : "text-xl"
            } font-bold hover:text-main-text font-exo-2 ${
              isMobile ? "w-full py-2" : ""
            }`}
          >
            {item.name}
          </h1>
        </Link>
      </motion.div>
    ));

  return (
    <nav className="w-full px-6 py-4 bg-background relative">
      <div className="flex w-full items-center justify-between">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="font-bold font-exo-2 text-3xl"
        >
          Vishal
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-10 items-center">
          {renderLinks()}
        </div>

        {/* Icons on the right */}
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="bg-black rounded-full p-2 text-white hover:bg-black/70 hidden sm:block"
            >
              <MailPlus />
            </motion.div>
          </Link>

          {/* Hamburger Menu */}
          <button
            className="sm:hidden z-50"
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
            className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 flex flex-col gap-5 items-start px-6 py-4 sm:hidden z-40 shadow-md"
          >
            {renderLinks(true)}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

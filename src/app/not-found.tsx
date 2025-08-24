"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className=" mt-30 flex flex-col items-center justify-center bg-background px-4 text-foreground text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl md:text-8xl font-bold mb-6 text-primary"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-xl"
      >
        Oops! The page you’re looking for doesn’t exist. Maybe it was never{" "}
        <span className="text-primary font-semibold">meant to be.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link href="/">
          <Button className="bg-primary text-primary-foreground px-6 py-3 text-lg hover:bg-primary/90">
            Go Back Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

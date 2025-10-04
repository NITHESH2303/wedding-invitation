"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
}

const getDirectionVariants = (direction: string, distance: number): Variants => ({
  hidden: {
    opacity: 0,
    ...(direction === "up" && { y: distance }),
    ...(direction === "down" && { y: -distance }),
    ...(direction === "left" && { x: distance }),
    ...(direction === "right" && { x: -distance }),
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
    },
  },
});

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const variants = getDirectionVariants(direction, distance);

  if (!isMounted) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      transition={{
        delay,
        duration,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}

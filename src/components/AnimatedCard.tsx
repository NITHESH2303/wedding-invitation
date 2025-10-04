"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  tap?: boolean;
  stagger?: number;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hover = true,
  tap = true,
  stagger = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={`${className}`}
      variants={stagger > 0 ? containerVariants : cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={hover ? "hover" : undefined}
      whileTap={tap ? "tap" : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
    >
      <motion.div
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full"
        variants={stagger > 0 ? cardVariants : undefined}
        whileHover={{
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          transition: { duration: 0.3 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

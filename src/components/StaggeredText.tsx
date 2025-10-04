"use client";

import { motion, Variants } from "framer-motion";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right";
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const letterVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function StaggeredText({ 
  text, 
  className = "", 
  delay = 0,
  stagger = 0.1,
  direction = "up"
}: StaggeredTextProps) {
  const getDirectionVariants = () => {
    switch (direction) {
      case "down":
        return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
      default:
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    }
  };

  const directionVariants = getDirectionVariants();

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              ...letterVariants,
              hidden: { ...letterVariants.hidden, ...directionVariants.hidden },
              visible: { ...letterVariants.visible, ...directionVariants.visible }
            }}
            whileHover={{ 
              scale: 1.2, 
              color: "#ef4444",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}

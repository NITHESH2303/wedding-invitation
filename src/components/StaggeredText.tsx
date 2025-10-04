// src/components/StaggeredText.tsx

"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface StaggeredTextProps {
  text: string;
  className?: string;
  variant?: 'heading' | 'subheading';
  direction?: "up" | "down" | "left" | "right";
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const getDirectionVariants = (direction: string): Variants => {
  switch (direction) {
    case "down":
      return { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
    case "left":
      return { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };
    default:
      return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  }
};

export default function StaggeredText({ 
  text, 
  variant = 'subheading',
  className = "",
  direction = "up"
}: StaggeredTextProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const textClasses = 
    variant === 'heading' 
      ? "font-extrabold tracking-widest uppercase text-4xl md:text-5xl lg:text-6xl"
      : "text-lg md:text-xl";

  const directionVariants = getDirectionVariants(direction);

  if (!isMounted) {
    return (
      <div className={`overflow-hidden ${className || textClasses}`}>
        {text}
      </div>
    );
  }

  return (
    <motion.div
      className={`overflow-hidden ${className || textClasses}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {text.split("").map((char, charIndex) => {
        return (
          <motion.span
            key={charIndex}
            className="inline-block cursor-pointer"
            variants={{
              hidden: { 
                opacity: 0, 
                ...directionVariants.hidden,
              },
              visible: {
                opacity: 1,
                ...directionVariants.visible,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{ 
              scale: 1.1,
              color: "#fb7185",
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.95,
              color: "#fb7185",
              transition: { duration: 0.1 }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
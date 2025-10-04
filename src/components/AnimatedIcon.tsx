"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
  animation?: "float" | "pulse" | "spin" | "bounce" | "wiggle";
  delay?: number;
  duration?: number;
  hover?: boolean;
}

const animations = {
  float: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  pulse: {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  spin: {
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
  bounce: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  wiggle: {
    animate: {
      rotate: [0, 10, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  },
};

export default function AnimatedIcon({
  children,
  className = "",
  animation = "float",
  delay = 0,
  duration = 2,
  hover = true,
}: AnimatedIconProps) {
  const animationConfig = animations[animation];

  return (
    <motion.div
      className={className}
      {...animationConfig}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        ...animationConfig.animate
      }}
      whileHover={hover ? {
        scale: 1.2,
        rotate: 5,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      } : undefined}
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

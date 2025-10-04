"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: AnimatedCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      },
    },
  };

  if (!isMounted) {
    return (
      <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 h-full ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 h-full ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)",
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      {children}
    </motion.div>
  );
}
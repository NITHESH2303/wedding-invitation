"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <motion.button
      className={`bg-gradient-to-r from-mint-300 via-gentle-300 to-blush-300 hover:from-mint-400 hover:via-gentle-400 hover:to-blush-400 text-navy-800 font-extrabold rounded-full px-8 py-4 text-lg transition-all duration-300 shadow-lg ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        boxShadow: "0 10px 30px rgba(251, 113, 133, 0.4)" 
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {children}
    </motion.button>
  );
}
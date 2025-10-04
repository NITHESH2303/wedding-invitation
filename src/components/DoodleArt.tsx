"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DoodleArtProps {
  children?: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

// Heart Doodle
export const DoodleHeart = ({ className = "w-6 h-6 text-pink-400", animate = true, delay = 0 }: DoodleArtProps) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24"
    initial={animate ? { opacity: 0, scale: 0.8, rotate: -10 } : {}}
    whileInView={animate ? { opacity: 1, scale: 1, rotate: 0 } : {}}
    whileHover={{ scale: 1.2, rotate: 5 }}
    transition={{ duration: 0.5, delay }}
  >
    <path 
      d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
    />
  </motion.svg>
);

// Star Doodle
export const DoodleStar = ({ className = "w-5 h-5 text-yellow-400", animate = true, delay = 0 }: DoodleArtProps) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24"
    initial={animate ? { opacity: 0, scale: 0.8, rotate: 10 } : {}}
    whileInView={animate ? { opacity: 1, scale: 1, rotate: 0 } : {}}
    whileHover={{ scale: 1.3, rotate: -5 }}
    transition={{ duration: 0.5, delay }}
  >
    <path 
      d="M12,2l3.09,6.26L22,9.27l-5,4.87 1.18,6.88L12,17.77l-6.18,3.25L7,14.14 2,9.27l6.91-1.01L12,2z"
      fill="currentColor"
    />
  </motion.svg>
);

// Flower Doodle
export const DoodleFlower = ({ className = "w-8 h-8 text-pink-300", animate = true, delay = 0 }: DoodleArtProps) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24"
    initial={animate ? { opacity: 0, scale: 0.5, rotate: -15 } : {}}
    whileInView={animate ? { opacity: 1, scale: 1, rotate: 0 } : {}}
    whileHover={{ scale: 1.2, rotate: 10 }}
    transition={{ duration: 0.6, delay }}
  >
    <path 
      d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9C21,10.1 20.1,11 19,11C17.9,11 17,10.1 17,9C17,7.9 17.9,7 19,7C20.1,7 21,7.9 21,9M3,9C3,10.1 3.9,11 5,11C6.1,11 7,10.1 7,9C7,7.9 6.1,7 5,7C3.9,7 3,7.9 3,9M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8Z"
      fill="currentColor"
    />
  </motion.svg>
);

// Arrow Doodle
export const DoodleArrow = ({ className = "w-16 h-8 text-mint-400", animate = true, delay = 0 }: DoodleArtProps) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 32 16"
    initial={animate ? { pathLength: 0 } : {}}
    whileInView={animate ? { pathLength: 1 } : {}}
    transition={{ duration: 2, delay, ease: "easeInOut" }}
  >
    <path 
      d="M2,8 Q8,2 16,8 Q24,14 30,8" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
      strokeLinecap="round"
    />
    <polygon 
      points="26,6 30,8 26,10" 
      fill="currentColor"
    />
  </motion.svg>
);

// Doodle Frame
export const DoodleFrame = ({ children, className = "" }: DoodleArtProps) => (
  <div className={`relative ${className}`}>
    {/* Corner decorations */}
    <div className="absolute -top-2 -left-2">
      <DoodleStar className="w-4 h-4 text-yellow-400" animate={false} />
    </div>
    <div className="absolute -top-2 -right-2">
      <DoodleStar className="w-4 h-4 text-yellow-400" animate={false} />
    </div>
    <div className="absolute -bottom-2 -left-2">
      <DoodleStar className="w-4 h-4 text-yellow-400" animate={false} />
    </div>
    <div className="absolute -bottom-2 -right-2">
      <DoodleStar className="w-4 h-4 text-yellow-400" animate={false} />
    </div>
    
    {/* Dashed border */}
    <div className="absolute inset-0 border-2 border-dashed border-yellow-300 rounded-3xl opacity-60 pointer-events-none" />
    
    {children}
  </div>
);

// Floating Doodles
export const FloatingDoodles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div
      className="absolute top-10 left-10"
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, 0]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <DoodleHeart className="w-6 h-6 text-pink-300" animate={false} />
    </motion.div>
    
    <motion.div
      className="absolute top-20 right-16"
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, -8, 0]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    >
      <DoodleStar className="w-5 h-5 text-yellow-300" animate={false} />
    </motion.div>
    
    <motion.div
      className="absolute bottom-20 left-20"
      animate={{ 
        y: [0, -8, 0],
        rotate: [0, 10, 0]
      }}
      transition={{ 
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    >
      <DoodleFlower className="w-7 h-7 text-pink-200" animate={false} />
    </motion.div>
    
    <motion.div
      className="absolute bottom-10 right-10"
      animate={{ 
        y: [0, -12, 0],
        rotate: [0, -5, 0]
      }}
      transition={{ 
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    >
      <DoodleHeart className="w-5 h-5 text-rose-300" animate={false} />
    </motion.div>
  </div>
);

export default {
  DoodleHeart,
  DoodleStar,
  DoodleFlower,
  DoodleArrow,
  DoodleFrame,
  FloatingDoodles
};

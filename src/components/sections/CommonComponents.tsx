"use client";

import { motion } from "framer-motion";
import { DoodleFrame } from "@/components/DoodleArt";
import { FloatDoodle, SelfieDoodle, CoffeeDoodle, ReadingDoodle } from "@/components/OpenDoodles";

// Animated Arrow Component
export const AnimatedArrow = ({ 
  direction = "right", 
  className = "", 
  delay = 0 
}: { 
  direction?: "left" | "right"; 
  className?: string; 
  delay?: number; 
}) => (
  <motion.div
    className={`flex items-center justify-center gap-2 ${className}`}
    initial={{ opacity: 0, x: direction === "left" ? -20 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
  >
    <svg 
      width="60" 
      height="30" 
      viewBox="0 0 100 50" 
      className={`text-mint-400 ${direction === "left" ? "scale-x-[-1]" : ""}`}
    >
      <path
        d="M 10 25 Q 30 15 50 25 Q 70 35 85 25"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 80 20 L 90 25 L 80 30"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

// Section Header Component
export const SectionHeader = ({ 
  title, 
  subtitle, 
  icon, 
  className = "" 
}: { 
  title: string; 
  subtitle?: string; 
  icon?: React.ReactNode; 
  className?: string; 
}) => (
  <div className={`text-center mb-16 ${className}`}>
    <div className="flex items-center justify-center gap-4 mb-8">
      {icon}
      <h2 className="text-5xl md:text-6xl font-handwritten text-navy-800 tracking-widest-em uppercase transform -rotate-1">
        {title}
      </h2>
      {icon}
    </div>
    {subtitle && (
      <p className="text-xl md:text-2xl text-navy-600 font-medium leading-emotional">
        {subtitle}
      </p>
    )}
  </div>
);

// Card Component with Doodle Decorations
export const DoodleCard = ({ 
  children, 
  className = "", 
  doodleTop, 
  doodleBottom,
  gradient = "from-peach-200 to-blush-100"
}: { 
  children: React.ReactNode; 
  className?: string; 
  doodleTop?: React.ReactNode; 
  doodleBottom?: React.ReactNode;
  gradient?: string;
}) => (
  <div className={`relative ${className}`}>
    {doodleTop}
    {doodleBottom}
    <DoodleFrame className={`bg-gradient-to-r ${gradient} rounded-2xl p-6 shadow-xl`}>
      {children}
    </DoodleFrame>
  </div>
);

// Floating Doodles Background
export const FloatingDoodlesBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <FloatDoodle 
      width={60} 
      height={60} 
      className="absolute -top-4 -right-4 -z-10"
      delay={0.5}
    />
    <SelfieDoodle 
      width={40} 
      height={40} 
      className="absolute -bottom-2 -left-2 -z-10"
      delay={0.8}
    />
    <CoffeeDoodle 
      width={60} 
      height={60} 
      className="absolute -top-4 -left-4 -z-10"
      delay={0.7}
    />
    <ReadingDoodle 
      width={50} 
      height={50} 
      className="absolute -bottom-2 -right-2 -z-10"
      delay={1.0}
    />
  </div>
);

// CTA Button Component
export const CTAButton = ({ 
  href, 
  children, 
  className = "" 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string; 
}) => (
  <motion.a
    href={href}
    className={`inline-block bg-gradient-to-r from-mint-300 to-gentle-300 text-navy-800 px-12 py-4 rounded-full text-xl font-handwritten uppercase tracking-widest-em transition-all duration-300 shadow-lg hover:shadow-xl transform -rotate-1 ${className}`}
    whileHover={{
      scale: 1.05,
      y: -2,
      rotate: 0
    }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

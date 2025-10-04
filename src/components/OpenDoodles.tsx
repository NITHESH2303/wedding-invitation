"use client";

import { motion } from "framer-motion";
import React from "react";

interface DoodleProps {
  className?: string;
  width?: number;
  height?: number;
  animate?: boolean;
  delay?: number;
}

export const DoodleImage = ({ 
  src, 
  alt, 
  className = "", 
  width = 60, 
  height = 60, 
  animate = true,
  delay = 0
}: DoodleProps & { src: string; alt: string }) => (
  <motion.img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    initial={animate ? { opacity: 0, scale: 0.8 } : {}}
    animate={animate ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.6, delay }}
    whileHover={animate ? { scale: 1.1, rotate: 5 } : {}}
  />
);

export const LovingDoodle = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/open-doodles/svg/LovingDoodle.svg" 
    alt="Loving doodle" 
    {...props} 
  />
);

export const DancingDoodle = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/open-doodles/svg/DancingDoodle.svg" 
    alt="Dancing doodle" 
    {...props} 
  />
);

export const GroovyDoodle = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/open-doodles/svg/GroovyDoodle.svg" 
    alt="Groovy doodle" 
    {...props} 
  />
);

export const FloatDoodle = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/open-doodles/svg/FloatDoodle.svg" 
    alt="Float doodle" 
    {...props} 
  />
);

export const SelfieDoodle = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/open-doodles/svg/SelfieDoodle.svg" 
    alt="Selfie doodle" 
    {...props} 
  />
);

export const CoffeeDoodle = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/open-doodles/svg/CoffeeDoddle.svg" 
    alt="Coffee doodle" 
    {...props} 
  />
);

export const ReadingDoodle = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/open-doodles/svg/ReadingDoodle.svg" 
    alt="Reading doodle" 
    {...props} 
  />
);

export const PlantDoodle = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/open-doodles/svg/PlantDoodle.svg" 
    alt="Plant doodle" 
    {...props} 
  />
);

// Humaaans components
export const HumaaanSitting1 = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/Humaaans/sitting-1.svg" 
    alt="Sitting person 1" 
    {...props} 
  />
);

export const HumaaanSitting2 = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/Humaaans/sitting-2.svg" 
    alt="Sitting person 2" 
    {...props} 
  />
);

export const HumaaanStanding1 = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/Humaaans/standing-1.svg" 
    alt="Standing person 1" 
    {...props} 
  />
);

export const HumaaanStanding2 = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/Humaaans/standing-2.svg" 
    alt="Standing person 2" 
    {...props} 
  />
);

export const HumaaanStanding3 = (props: DoodleProps) => (
  <DoodleImage 
    src="/doodles/Humaaans/standing-3.svg" 
    alt="Standing person 3" 
    {...props} 
  />
);

export const FloatingDoodles = () => {
  const doodleElements = [
    { Component: LovingDoodle, top: "10%", left: "15%", delay: 0.2 },
    { Component: DancingDoodle, top: "20%", right: "10%", delay: 0.5 },
    { Component: GroovyDoodle, top: "30%", left: "5%", delay: 0.8 },
    { Component: FloatDoodle, top: "40%", right: "20%", delay: 1.1 },
    { Component: SelfieDoodle, top: "50%", left: "25%", delay: 1.4 },
    { Component: CoffeeDoodle, top: "60%", right: "5%", delay: 1.7 },
    { Component: ReadingDoodle, top: "70%", left: "10%", delay: 2.0 },
    { Component: PlantDoodle, top: "80%", right: "15%", delay: 2.3 },
    { Component: HumaaanSitting1, top: "15%", right: "5%", delay: 0.3 },
    { Component: HumaaanStanding1, top: "35%", left: "10%", delay: 0.6 },
    { Component: HumaaanStanding2, top: "55%", right: "25%", delay: 0.9 },
    { Component: HumaaanSitting2, top: "75%", left: "5%", delay: 1.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {doodleElements.map((doodle, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: doodle.top, left: doodle.left || "auto", right: doodle.right || "auto" }}
          initial={{ opacity: 0, y: 20, rotate: Math.random() * 20 - 10 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            y: [20, -20, 20, -20],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: doodle.delay + Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <doodle.Component 
            width={40} 
            height={40} 
            animate={false}
          />
        </motion.div>
      ))}
    </div>
  );
};
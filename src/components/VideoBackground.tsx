"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  texts: string[];
  interval?: number;
  className?: string;
}

const textVariants = {
  enter: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.8,
  },
};

export default function VideoBackground({
  videoSrc,
  texts,
  interval = 3000,
  className = "",
}: VideoBackgroundProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-center px-4"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {texts[currentTextIndex]}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Scroll to discover our story
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💕
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🎉
      </motion.div>
    </div>
  );
}

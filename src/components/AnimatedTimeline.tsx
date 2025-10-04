"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
  color: string;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function AnimatedTimeline({
  items,
  className = "",
}: AnimatedTimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
    },
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Timeline Line */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-pink-400"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-12"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="relative flex items-start space-x-6"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {/* Icon */}
            <motion.div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg z-10 ${item.color}`}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              {item.icon}
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

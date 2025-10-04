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
  const isInView = useInView(ref, { once: false, amount: 0.2 });

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
      {/* Timeline Line - Removed blue, using mint only */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-mint-200 to-mint-300"
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
            className="relative flex items-start space-x-6 w-full"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {/* Art Placeholder Icon - Uniform Size */}
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg z-10 bg-gradient-to-r from-gentle-200 to-mint-200 flex-shrink-0"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
            </motion.div>

            {/* Content - Full Width Card */}
            <motion.div
              className="flex-1 bg-gradient-to-r from-peach-200 to-blush-100 rounded-2xl p-8 shadow-xl"
              whileHover={{
                y: -2,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-extrabold text-navy-800 tracking-widest-em uppercase">{item.title}</h3>
                <span className="text-sm text-navy-600 bg-white/50 px-4 py-2 rounded-full font-bold">
                  {item.date}
                </span>
              </div>
              <p className="text-navy-700 leading-emotional text-lg font-medium">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
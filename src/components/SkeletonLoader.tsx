"use client";

import { motion } from "framer-motion";

export default function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100 via-oat-50 to-peach-50 flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-mint-200 to-gentle-200 rounded-full mx-auto mb-4"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.p
          className="text-navy-600 font-handwritten text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading our love story...
        </motion.p>
      </motion.div>
    </div>
  );
}
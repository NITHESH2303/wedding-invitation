"use client";

import { motion } from "framer-motion";
import StaggeredText from "@/components/StaggeredText";
import { DoodleHeart, DoodleStar, DoodleFlower } from "@/components/DoodleArt";

export default function FooterSection() {
  return (
    <motion.footer
      className="bg-navy-800 text-white py-4 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-blush-300 to-navy-800" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
      }}></div>
      
      <div className="max-w-4xl mx-auto px-8 py-4">
        <div className="text-center">
          <motion.div
            className="border-t border-white/20 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <DoodleHeart className="w-5 h-5 text-pink-300" />
              <StaggeredText
                text="SEE YOU THERE!"
                className="text-lg md:text-xl font-handwritten text-white tracking-widest-em uppercase transform -rotate-1"
                direction="up"
                once={false}
              />
              <DoodleHeart className="w-5 h-5 text-pink-300" />
            </div>
            <p className="text-white/80 text-sm font-script leading-emotional mb-1">
              &ldquo;Made with ❤️ for our special day&rdquo;
            </p>
            <p className="text-white/60 text-xs font-medium leading-emotional">
              With love from Boobana & Giri
            </p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <DoodleStar className="w-3 h-3 text-yellow-300" />
              <DoodleFlower className="w-3 h-3 text-pink-300" />
              <DoodleHeart className="w-3 h-3 text-pink-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

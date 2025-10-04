"use client";

import { motion } from "framer-motion";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import { DoodleHeart } from "@/components/DoodleArt";
import { FloatingDoodles } from "@/components/DoodleArt";

export default function LoveStorySection() {
  return (
    <section
      id="story"
      className="relative py-20"
      style={{
        background: `
          linear-gradient(135deg, #f7f5f2 0%, #f9f6f1 50%, #f3edea 100%),
          radial-gradient(circle at 30% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
        `
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-oat-300 to-blush-300" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
      }}></div>

      <FloatingDoodles />
      
      <div className="max-w-7xl mx-auto px-8 py-8">
        <ScrollReveal direction="up" className="text-center mb-16" once={false}>
          {/* Desktop: Single line */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center gap-4 mb-8">
              <DoodleHeart className="w-8 h-8 text-pink-400" />
              <StaggeredText
                text="OUR LOVE STORY"
                className="text-5xl md:text-6xl font-handwritten text-navy-800 tracking-widest-em uppercase transform -rotate-1"
                direction="up"
                once={false}
              />
              <DoodleHeart className="w-8 h-8 text-pink-400" />
            </div>
          </div>
          
          {/* Mobile: Two lines */}
          <div className="block md:hidden text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DoodleHeart className="w-6 h-6 text-pink-400" />
              <StaggeredText
                text="OUR LOVE"
                className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform -rotate-1"
                direction="up"
                once={false}
              />
              <DoodleHeart className="w-6 h-6 text-pink-400" />
            </div>
            <StaggeredText
              text="STORY"
              className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform rotate-1"
              direction="up"
              once={false}
            />
          </div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg md:text-xl text-navy-600 leading-emotional max-w-4xl mx-auto mb-8 font-script">
              &ldquo;Every love story is beautiful, but ours is my favorite. From the first hello to forever, 
              we&apos;ve written our story together, one chapter at a time.&rdquo;
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Timeline */}
        <AnimatedTimeline />
      </div>
    </section>
  );
}

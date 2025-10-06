"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import StaggeredText from "@/components/StaggeredText";
import { DoodleHeart, DoodleStar, DoodleFlower } from "@/components/DoodleArt";
import { FloatingDoodles } from "@/components/DoodleArt";

interface StoryEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  gradient: string;
  doodleImage: string;
  doodleAlt: string;
  bgColor: string;
}

const storyEvents: StoryEvent[] = [
  {
    id: 1,
    title: "TEMPLE MEET",
    date: "The Beginning",
    description: "📿 Quiet beginnings at the temple, where it all started.",
    gradient: "from-rose-100 via-pink-50 to-rose-200",
    doodleImage: "/assests/temple_visit.png",
    doodleAlt: "Temple visit - where it all began",
    bgColor: "#fdf2f8"
  },
  {
    id: 2,
    title: "BANGALORE TWIST",
    date: "City Sparks", 
    description: "🚉 A city, a laugh, and a spark that never left.",
    gradient: "from-sky-100 via-blue-50 to-sky-200",
    doodleImage: "/doodles/open-doodles/png/SittingDoodle.png",
    doodleAlt: "City adventures and laughter",
    bgColor: "#f0f9ff"
  },
  {
    id: 3,
    title: "BLUE SHIRT SAGA",
    date: "Family Favorite",
    description: "👕 The family's favorite inside joke, forever remembered.",
    gradient: "from-amber-100 via-yellow-50 to-amber-200",
    doodleImage: "/assests/blue_shirt.png",
    doodleAlt: "The famous blue shirt moment",
    bgColor: "#fffbeb"
  },
  {
    id: 4,
    title: "GAS STATION FAIL",
    date: "Perfect Timing",
    description: "😂 Timing: 0/10, effort: A+. Still unforgettable.",
    gradient: "from-emerald-100 via-green-50 to-emerald-200",
    doodleImage: "/doodles/open-doodles/png/MessyDoodle.png",
    doodleAlt: "Gas station adventure",
    bgColor: "#ecfdf5"
  },
  {
    id: 5,
    title: "ADVENTURES",
    date: "Endless Journey",
    description: "🚗 Endless trips, endless talks, endless us.",
    gradient: "from-violet-100 via-purple-50 to-violet-200",
    doodleImage: "/doodles/open-doodles/png/RunningDoodle.png",
    doodleAlt: "Adventure partners",
    bgColor: "#f5f3ff"
  },
  {
    id: 6,
    title: "PROPOSAL",
    date: "One Forever",
    description: "💍 Under the stars, one question, one forever.",
    gradient: "from-rose-100 via-pink-50 to-rose-200",
    doodleImage: "/doodles/open-doodles/png/DancingDoodle.png",
    doodleAlt: "The perfect proposal",
    bgColor: "#fdf2f8"
  }
];

export default function LoveStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate horizontal translation based on scroll progress
  const cardWidth = 400;
  const cardGap = 24;
  const totalCardWidth = cardWidth + cardGap;
  
  // Transform scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -(totalCardWidth * (storyEvents.length - 1))]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section
      id="story"
      className="relative w-full"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-oat-50 to-peach-50" />
      <FloatingDoodles />
      
      {/* Section Header */}
      <motion.div
        className="sticky top-0 z-20 pt-20 pb-10 text-center bg-gradient-to-b from-cream-100/80 to-transparent backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <DoodleHeart className="w-8 h-8 text-yellow-400" />
          <StaggeredText
            text="OUR LOVE STORY"
            className="text-4xl md:text-5xl font-handwritten text-navy-800 tracking-widest-em uppercase transform -rotate-1"
            direction="up"
            once={false}
          />
          <DoodleHeart className="w-8 h-8 text-yellow-400" />
        </div>
        <p className="text-lg text-navy-600 font-script max-w-2xl mx-auto">
          Every love story is beautiful, but ours is my favorite. From the first hello to forever, we&apos;ve written our story together.
        </p>
      </motion.div>

      {/* Sticky Gallery Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          ref={galleryRef}
          className="flex items-center gap-6 px-8"
          style={{ x: smoothX }}
        >
          {storyEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex-shrink-0 w-[320px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[600px] sm:h-[650px] md:h-[700px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <motion.div
                className={`w-full h-full rounded-3xl shadow-2xl flex flex-col items-center justify-center px-8 py-12 bg-gradient-to-br ${event.gradient} relative overflow-hidden`}
                style={{
                  background: `linear-gradient(135deg, ${event.bgColor} 0%, rgba(255,255,255,0.9) 50%, ${event.bgColor} 100%)`
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Floating Doodle Accents */}
                <motion.div 
                  className="absolute top-6 right-6 opacity-30"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 8, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <DoodleHeart className="w-8 h-8 text-yellow-500" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-20 left-6 opacity-25"
                  animate={{ 
                    x: [0, 3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <DoodleStar className="w-6 h-6 text-pink-400" />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 left-4 opacity-20"
                  animate={{ 
                    rotate: [0, 12, 0],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <DoodleFlower className="w-5 h-5 text-rose-400" />
                </motion.div>

                {/* Content */}
                <div className="text-center z-10 relative flex-1 flex flex-col justify-center">
                  <motion.h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-navy-800 mb-6 tracking-widest leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                  >
                    {event.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-xl md:text-2xl font-bold text-navy-700 mb-6 tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false }}
                  >
                    {event.date}
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg md:text-xl font-medium text-navy-600 leading-relaxed max-w-sm mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false }}
                  >
                    {event.description}
                  </motion.p>
                </div>
                
                {/* Doodle Art Image */}
                <motion.div 
                  className="absolute bottom-6 right-6 w-24 h-24 rounded-full bg-white/70 shadow-xl flex items-center justify-center border-3 border-white/90"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0],
                      rotate: [0, 3, 0]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src={event.doodleImage}
                      alt={event.doodleAlt}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {storyEvents.map((_, idx) => (
          <motion.div
            key={idx}
            className="w-3 h-3 rounded-full bg-white/70 backdrop-blur-sm border-2 border-white/90"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-navy-600 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-sm font-medium bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm">
          Scroll to explore our story
        </span>
        <motion.div
          className="w-6 h-6 border-2 border-yellow-500 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-yellow-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

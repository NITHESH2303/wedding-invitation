"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
  emotionalColor: string;
  accentColor: string;
}

const storyEvents: StoryEvent[] = [
  {
    id: 1,
    title: "TEMPLE MEET",
    date: "The Beginning",
    description: "📿 Quiet beginnings at the temple, where our souls first whispered hello.",
    gradient: "from-rose-50 via-pink-25 to-orange-50",
    doodleImage: "/assests/temple_visit.png",
    doodleAlt: "Temple visit - where it all began",
    bgColor: "linear-gradient(135deg, #fef7f0 0%, #fdf2f8 50%, #fff7ed 100%)",
    emotionalColor: "#f97316",
    accentColor: "#ec4899"
  },
  {
    id: 2,
    title: "BANGALORE TWIST",
    date: "City Sparks",
    description: "🚉 In the bustling city, we found our quiet corner of forever.",
    gradient: "from-blue-50 via-sky-25 to-cyan-50",
    doodleImage: "/doodles/open-doodles/png/SittingDoodle.png",
    doodleAlt: "City adventures and laughter",
    bgColor: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ecfeff 100%)",
    emotionalColor: "#0ea5e9",
    accentColor: "#06b6d4"
  },
  {
    id: 3,
    title: "BLUE SHIRT SAGA",
    date: "Family Favorite",
    description: "👕 The shirt that made us laugh, the memory that made us family.",
    gradient: "from-amber-50 via-yellow-25 to-orange-50",
    doodleImage: "/assests/blue_shirt.png",
    doodleAlt: "The famous blue shirt moment",
    bgColor: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fed7aa 100%)",
    emotionalColor: "#f59e0b",
    accentColor: "#eab308"
  },
  {
    id: 4,
    title: "GAS STATION FAIL",
    date: "Perfect Timing",
    description: "😂 When plans go wrong but hearts go right. Our beautiful disaster.",
    gradient: "from-emerald-50 via-green-25 to-teal-50",
    doodleImage: "/doodles/open-doodles/png/MessyDoodle.png",
    doodleAlt: "Gas station adventure",
    bgColor: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #ccfbf1 100%)",
    emotionalColor: "#10b981",
    accentColor: "#14b8a6"
  },
  {
    id: 5,
    title: "ADVENTURES",
    date: "Endless Journey",
    description: "🚗 Miles of roads, hours of talks, and a lifetime of us.",
    gradient: "from-violet-50 via-purple-25 to-indigo-50",
    doodleImage: "/doodles/open-doodles/png/RunningDoodle.png",
    doodleAlt: "Adventure partners",
    bgColor: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #e0e7ff 100%)",
    emotionalColor: "#8b5cf6",
    accentColor: "#6366f1"
  },
  {
    id: 6,
    title: "PROPOSAL",
    date: "One Forever",
    description: "💍 Under the stars, one question changed everything. Forever starts now.",
    gradient: "from-rose-50 via-pink-25 to-red-50",
    doodleImage: "/doodles/open-doodles/png/DancingDoodle.png",
    doodleAlt: "The perfect proposal",
    bgColor: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fef2f2 100%)",
    emotionalColor: "#e11d48",
    accentColor: "#f43f5e"
  }
];

export default function LoveStorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Determine active card based on scroll progress
  const [activeCardIndex, setActiveCardIndex] = useState(-1);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      console.log("Scroll progress:", progress); // Debug log
      // First 20% = intro, remaining 80% distributed across cards
      if (progress < 0.2) {
        setActiveCardIndex(-1); // Show intro
      } else {
        const cardProgress = (progress - 0.2) / 0.8;
        const cardIndex = Math.floor(cardProgress * storyEvents.length);
        setActiveCardIndex(Math.min(cardIndex, storyEvents.length - 1));
      }
    });

    return unsubscribe;
  }, [scrollYProgress]);

  const floatingY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const floatingY2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const floatingRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const backgroundTransform = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
    [
      "linear-gradient(135deg, #fef7f0 0%, #fdf2f8 100%)",
      "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
      "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
      "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
      "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
      "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
      "linear-gradient(135deg, #fef7f0 0%, #fdf2f8 100%)"
    ]
  );

  const mouseParallaxX = useTransform(mouseX, [0, 1200], [-50, 50]);
  const mouseParallaxY = useTransform(mouseY, [0, 800], [-30, 30]);

  console.log("Active card index:", activeCardIndex); // Debug log

  return (
    <motion.section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        minHeight: "400vh",
        background: backgroundTransform
      }}
    >
      {/* Animated background doodles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{
            x: mouseParallaxX,
            y: mouseParallaxY,
            top: `${10 + (i * 8)}%`,
            left: `${5 + (i * 7)}%`,
            rotate: floatingRotate
          }}
        >
          {i % 3 === 0 ? (
            <DoodleHeart size={24} color="#ec4899" />
          ) : i % 3 === 1 ? (
            <DoodleStar size={20} color="#f59e0b" />
          ) : (
            <DoodleFlower size={22} color="#10b981" />
          )}
        </motion.div>
      ))}

      {/* Fixed viewport container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Intro section */}
        {activeCardIndex === -1 && (
          <motion.div 
            className="text-center px-8 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent"
              style={{ y: floatingY1 }}
            >
              Our Love Story
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed"
              style={{ y: floatingY2 }}
            >
              Every love story is beautiful, but ours is my favorite. From the first hello to forever,
              we've painted our journey with colors of joy, laughter, and endless love.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-600 animate-bounce"
              style={{ y: floatingY1 }}
            >
              ↓ Scroll to explore our journey
            </motion.p>

            {/* Interactive floating doodles */}
            {[...Array(6)].map((_, i) => (
              <FloatingDoodles key={i} index={i} />
            ))}
          </motion.div>
        )}

        {/* Cards section */}
        {activeCardIndex >= 0 && (
          <motion.div 
            className="w-full max-w-4xl px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Floating Title */}
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-center mb-16"
              style={{
                backgroundImage: `linear-gradient(45deg, ${storyEvents[activeCardIndex]?.emotionalColor}, ${storyEvents[activeCardIndex]?.accentColor})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Our Love Story
            </motion.h1>

            {/* Active Card */}
            <motion.div
              key={activeCardIndex}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ 
                opacity: 1, 
                scale: 1.02, 
                y: 0,
                boxShadow: `0 25px 50px -12px ${storyEvents[activeCardIndex]?.emotionalColor}40`
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Emotional color accent */}
              <motion.div 
                className="absolute inset-0 opacity-5 rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, ${storyEvents[activeCardIndex]?.emotionalColor}, ${storyEvents[activeCardIndex]?.accentColor})`
                }}
              />

              {/* Animated floating doodles on card */}
              <FloatingDoodles index={activeCardIndex} />

              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <motion.div 
                  className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={storyEvents[activeCardIndex]?.doodleImage || "/placeholder.png"}
                    alt={storyEvents[activeCardIndex]?.doodleAlt || "Story moment"}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      console.log("Image failed to load:", storyEvents[activeCardIndex]?.doodleImage);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 opacity-20 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, ${storyEvents[activeCardIndex]?.emotionalColor}, ${storyEvents[activeCardIndex]?.accentColor})`
                    }}
                  />
                </motion.div>

                {/* Text Content */}
                <div className="space-y-6">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: storyEvents[activeCardIndex]?.emotionalColor }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {storyEvents[activeCardIndex]?.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg font-medium opacity-80"
                    style={{ color: storyEvents[activeCardIndex]?.accentColor }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {storyEvents[activeCardIndex]?.date}
                  </motion.p>
                  
                  <motion.p 
                    className="text-xl text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {storyEvents[activeCardIndex]?.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Development debug panel */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg font-mono text-sm z-50">
          <div>Progress: {(scrollYProgress.get() * 100).toFixed(1)}%</div>
          <div>Active Card: {activeCardIndex >= 0 ? `${activeCardIndex + 1}/${storyEvents.length}` : 'Intro'}</div>
          {activeCardIndex >= 0 && (
            <div style={{ color: storyEvents[activeCardIndex]?.emotionalColor }}>
              Current: {storyEvents[activeCardIndex]?.emotionalColor}
            </div>
          )}
        </div>
      )}
    </motion.section>
  );
}
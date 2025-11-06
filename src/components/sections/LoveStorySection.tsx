"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import StaggeredText from "@/components/StaggeredText";
import { DoodleHeart } from "@/components/DoodleArt";
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
  imageWidth?: number;
  imageHeight?: number;
  imagePosition?: 'top' | 'center' | 'bottom' | 'left' | 'right';
  imageLayout?: 'full-width' | 'side-by-side' | 'centered' | 'floating';
}

const storyEvents: StoryEvent[] = [
  {
    id: 1,
    title: "OUR LOVE STORY",
    date: "📸 The Teaser",
    description: "Family WhatsApp group strikes again — photo dropped, “It’s a match!” But the skeptic wanted proof in person.",
    gradient: "from-rose-50 via-pink-25 to-orange-50",
    doodleImage: "/assests/giri_photo.jpg",
    doodleAlt: "The First Encounter",
    bgColor: "linear-gradient(135deg, #fef7f0 0%, #fdf2f8 50%, #fff7ed 100%)",
    imageWidth: 250,
    imageHeight: 200,
    imagePosition: 'center',
    imageLayout: 'centered'
  },
  {
    id: 2,
    title: "TEMPLE MEET",
    date: "📿 The First Encounter",
    description: "Polite questions, quiet smiles. Everyone left thinking, “Well, that was… calm.”",
    gradient: "from-rose-50 via-pink-25 to-orange-50",
    doodleImage: "/assests/temple_visit.png",
    doodleAlt: "Temple visit - where it all began",
    bgColor: "linear-gradient(135deg, #fef7f0 0%, #fdf2f8 50%, #fff7ed 100%)",
    imageWidth: 280,
    imageHeight: 200,
    imagePosition: 'top',
    imageLayout: 'centered'
  },
  {
    id: 3,
    title: "BANGALORE REMATCH",
    date: "🚉 The City Twist",
    description: "No parents this time. Laughter unlocked, endless chatter, and green lights all the way.",
    gradient: "from-blue-50 via-sky-25 to-cyan-50",
    doodleImage: "/assests/coffee_time.png",
    doodleAlt: "Coffee time in Bangalore",
    bgColor: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ecfeff 100%)",
    imageWidth: 300,
    imageHeight: 180,
    imagePosition: 'bottom',
    imageLayout: 'centered'
  },
  {
    id: 4,
    title: "THE BLUE SHIRT SAGA",
    date: "👕 Family’s Running Joke",
    description: "Temple, Bangalore, home visit — same blue shirt, every time. The legend lives on.",
    gradient: "from-amber-50 via-yellow-25 to-orange-50",
    doodleImage: "/assests/blue_shirt.png",
    doodleAlt: "The famous blue shirt moment",
    bgColor: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fed7aa 100%)",
    imageWidth: 320,
    imageHeight: 200,
    imagePosition: 'center',
    imageLayout: 'full-width'
  },
  {
    id: 5,
    title: "THE GAS STATION FAIL",
    date: "😂 Operation Stealth",
    description: "Surprise visit! Failed spectacularly. Hero out for petrol, cover blown. Family’s new favorite joke.",
    gradient: "from-emerald-50 via-green-25 to-teal-50",
    doodleImage: "/assests/Doodle_Animation_Secret_Mission_Fail.mp4",
    doodleAlt: "Gas station adventure",
    bgColor: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #ccfbf1 100%)",
    imageWidth: 500,
    imageHeight: 200,
    imagePosition: 'center',
    imageLayout: 'floating'
  },
  {
    id: 6,
    title: "THE ADVENTURES BEGIN",
    date: "🚗 Filter Coffee Tales",
    description: "Miles vanished, conversations brewed like filter coffee. “Arranged” quietly turned into “adventure.”",
    gradient: "from-violet-50 via-purple-25 to-indigo-50",
    doodleImage: "/assests/proposal.png", 
    doodleAlt: "Adventure partners",
    bgColor: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #e0e7ff 100%)",
    imageWidth: 300,
    imageHeight: 200,
    imagePosition: 'bottom',
    imageLayout: 'centered'
  },
  { 
    id: 7,
    title: "THE REST IS HISTORY",
    date: "💍 One Forever",
    description: "Families joined the fun, rings exchanged, shopping survived — two stories, one big celebration! 🎉",
    gradient: "from-rose-50 via-pink-25 to-red-50",
    doodleImage: "/assests/bride_groom.png",
    doodleAlt: "The perfect proposal moment",
    bgColor: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fef2f2 100%)",
    imageWidth: 300,
    imageHeight: 220,
    imagePosition: 'bottom',
    imageLayout: 'centered'
  }
];

export default function LoveStorySection() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    sectionHeight: 0
  });

  useEffect(() => {
    storyEvents.forEach((event) => {
      if (event.doodleImage && !event.doodleImage.endsWith('.mp4')) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = event.doodleImage;
        document.head.appendChild(link);
        const img = new window.Image();
        img.src = event.doodleImage;
      }
    });
  }, []);

  const [showCard, setShowCard] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseTransformX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1200], [-50, 50]);
  const mouseTransformY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [-30, 30]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const multiplier = window.innerWidth < 640 ? 0.8 : 1.0;
      const bufferSpace = window.innerHeight * 0.03;
      const sectionHeight = (window.innerHeight * storyEvents.length * multiplier) + bufferSpace;

      setDimensions({
        sectionHeight
      });
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []); 

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);


  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const shouldShow = progress > 0.07 && progress < 0.80;
      setShowCard(shouldShow);

      const activeStart = 0.10;
      const activeEnd = 0.70;
      const activeRange = activeEnd - activeStart;
      const adjustedProgress = Math.max(0, Math.min(1, (progress - activeStart) / activeRange));
      const cardProgress = adjustedProgress * storyEvents.length;
      const cardIndex = Math.floor(cardProgress);
      const clampedIndex = Math.min(Math.max(cardIndex, 0), storyEvents.length - 1);
      setCurrentCardIndex(clampedIndex);
    });
    
    return unsubscribe;
  }, [scrollYProgress]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const sectionBackground = `
    linear-gradient(135deg, #f3edea 0%, #f7f5f2 50%, #f9f6f1 100%),
    radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 60% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
  `;


  return (
    <motion.section
      id="story"
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        height: `${dimensions.sectionHeight}px`,
        background: sectionBackground,
      }}
    >
      {/* Paper texture background overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
           backgroundImage: `
             radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(255, 180, 220, 0.18) 0%, transparent 50%),
             radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.15) 0%, transparent 50%),
             linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.12) 50%, transparent 70%),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.02) 2px,
              rgba(255, 255, 255, 0.02) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.015) 2px,
              rgba(255, 255, 255, 0.015) 4px
            )
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 20px 20px, 20px 20px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0, 0 0, 0 0'
        }}
      />


         {/* Subtle Paper/Fabric Texture */}
         <div 
            className="absolute inset-0 opacity-2 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 10%),
                radial-gradient(circle at 80% 80%, rgba(160, 82, 45, 0.08) 0%, transparent 10%),
                radial-gradient(circle at 40% 60%, rgba(139, 69, 19, 0.06) 0%, transparent 15%),
                linear-gradient(45deg, transparent 40%, rgba(139, 69, 19, 0.03) 50%, transparent 25%),
                linear-gradient(-45deg, transparent 30%, rgba(160, 82, 45, 0.04) 50%, transparent 30%)
              `,
              backgroundSize:   '200px 200px, 300px 300px, 150px 150px, 100px 100px, 80px 80px',
              backgroundPosition: '0 0, 50px 50px, 25px 25px, 0 0, 40px 40px',
              backgroundRepeat: 'repeat'
            }}
          />

      {/* Regular section content when card is not active */}
      {!showCard && (
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1],
              staggerChildren: 0.2 
            }}
          >
            <motion.h2 className="mb-8 relative">
              {/* Decorative hearts and stars around the title */}
              <motion.div
                className="absolute -top-4 -left-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <DoodleHeart className="w-8 h-8 text-pink-400" />
              </motion.div>
              
              <motion.div
                className="absolute -top-2 -right-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" />
                </svg>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-6"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" />
                </svg>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <DoodleHeart className="w-6 h-6 text-red-400" />
              </motion.div>
              
              <StaggeredText 
                text="Love Story" 
                className="text-5xl md:text-5xl lg:text-6xl font-handwritten text-navy-800 tracking-widest-em uppercase"
                once={false}
              />
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Every love story is beautiful, but ours is my favorite. From the first hello to forever, 
              we&apos;ve painted our journey with colors of joy, laughter, and endless love.
            </motion.p>
            
            <motion.div 
              className="text-gray-500 text-lg font-medium"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ↓ Scroll to explore our colorful journey
            </motion.div>
          </motion.div>

          {/* Interactive floating doodles */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              x: mouseTransformX,
              y: mouseTransformY,
            }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute opacity-20"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <DoodleHeart className="w-12 h-12 text-pink-400" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      <div className="fixed opacity-0 pointer-events-none" aria-hidden="true">
        {storyEvents.map((event, idx) => (
          !event.doodleImage.endsWith('.mp4') && (
            <Image
              key={idx}
              src={event.doodleImage}
              alt={event.doodleAlt}
              width={event.imageWidth || 300}
              height={event.imageHeight || 200}
              priority={true}
              loading="eager"
            />
          )
        ))}
      </div>

      {/* Single Stacked Card - Changes content on scroll */}
      {showCard && (
        <>
          {/* Minimal Background Effects - Only during card viewing */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Single Corner Glow - Top Right */}
            <motion.div
              className="absolute top-20 right-20 w-1 h-1 bg-amber-300 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            {/* Single Corner Glow - Bottom Left */}
            <motion.div
              className="absolute bottom-32 left-24 w-1 h-1 bg-rose-300 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>

          {/* Floating Title - LiquidInk style */}
          <motion.div
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-30 text-center pointer-events-none"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1] 
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-handwritten text-navy-800 mb-4 tracking-widest-em uppercase whitespace-nowrap"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Love Story
            </motion.h2>
          </motion.div>

          {/* Single Card Container - Centered with slide animation */}
          <motion.div
            className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center"
            style={{
              top: '27vh',
              bottom: 'auto'
            }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ 
              y: "0%", 
              opacity: 1 
            }}
            exit={{ 
              y: "100%", 
              opacity: 0 
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1] 
            }}
          >
            {/* Single Card that changes content with dynamic layout */}
            <div
              className={`backdrop-blur-md rounded-3xl shadow-2xl relative overflow-hidden border-2 border-dashed border-yellow-300 w-full bg-white/90 ${
                storyEvents[currentCardIndex]?.imageLayout === 'side-by-side' ? 'flex p-0 max-w-4xl mx-2 md:max-w-2xl md:mx-4' : 'max-w-md p-4 sm:p-6 md:p-8 mx-4'
              }`}
              style={{
                height: typeof window !== 'undefined' && window.innerWidth < 640 ? "425px" : "500px",
              }}
            >
              {/* Consistent color accent */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-peach-400 to-oat-400"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />


              {/* Enhanced highlight ring */}
              <motion.div 
                className="absolute inset-0 rounded-3xl ring-2 ring-offset-4 ring-peach-400/60"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Decorative hearts and stars inside the card */}
              <motion.div
                className="absolute top-4 right-4 opacity-30"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <DoodleHeart className="w-6 h-6 text-pink-400" />
              </motion.div>
              
              <motion.div
                className="absolute top-4 left-4 opacity-20"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" />
                </svg>
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 right-4 opacity-25"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" />
                </svg>
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-4 opacity-20"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <DoodleHeart className="w-5 h-5 text-red-400" />
              </motion.div>

              {/* Dynamic Content Layout */}
              {storyEvents[currentCardIndex]?.imageLayout === 'side-by-side' ? (
                <div className="relative z-10 h-full flex">
                  {/* Text content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h3 
                      className="text-2xl font-bold mb-3 text-navy-800"
                    >
                      {storyEvents[currentCardIndex]?.title}
                    </h3>
                    <p 
                      className="text-sm font-semibold mb-6 tracking-wide text-oat-600"
                    >
                      {storyEvents[currentCardIndex]?.date}
                    </p>
                    <p 
                      className="text-navy-700 leading-relaxed text-lg font-light flex-1"
                    >
                      {storyEvents[currentCardIndex]?.description}
                    </p>
                  </div>

                  {/* Image on the side - starts from description level and extends to bottom */}
                  <div className={`w-48 p-4 flex flex-col ${
                    storyEvents[currentCardIndex]?.imagePosition === 'top' ? 'justify-start' :
                    storyEvents[currentCardIndex]?.imagePosition === 'center' ? 'justify-center' :
                    storyEvents[currentCardIndex]?.imagePosition === 'bottom' ? 'justify-end' : 'justify-start'
                  }`}>
                    <motion.div 
                      className="relative w-full h-full min-h-80 rounded-2xl bg-gradient-to-br from-peach-200 to-oat-200 shadow-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-yellow-300"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: currentCardIndex * 0.5
                      }}
                    >
                      {storyEvents[currentCardIndex]?.doodleImage?.endsWith('.mp4') ? (
                        <video
                          src={storyEvents[currentCardIndex]?.doodleImage}
                          className="w-full h-full object-contain rounded-xl"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <Image
                          src={storyEvents[currentCardIndex]?.doodleImage || "/assests/temple_visit.png"}
                          alt={storyEvents[currentCardIndex]?.doodleAlt || "Love story moment"}
                          width={storyEvents[currentCardIndex]?.imageWidth || 300}
                          height={storyEvents[currentCardIndex]?.imageHeight || 200}
                          className="w-full h-full object-contain rounded-xl"
                          priority={true}
                          loading="eager"
                          unoptimized={false}
                        />
                      )}
                    </motion.div>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 
                      className="text-2xl font-bold mb-3 text-navy-800"
                    >
                      {storyEvents[currentCardIndex]?.title}
                    </h3>
                    <p 
                      className="text-sm font-semibold mb-6 tracking-wide text-oat-600"
                    >
                      {storyEvents[currentCardIndex]?.date}
                    </p>
                    <p 
                      className="text-navy-700 leading-relaxed text-lg font-light"
                    >
                      {storyEvents[currentCardIndex]?.description}
                    </p>
                  </div>

                  {/* Image with dynamic positioning */}
                  <motion.div 
                    className={`flex items-end justify-center pb-2 ${
                      storyEvents[currentCardIndex]?.imagePosition === 'top' ? 'items-start pt-2' :
                      storyEvents[currentCardIndex]?.imagePosition === 'center' ? 'items-center' :
                      storyEvents[currentCardIndex]?.imagePosition === 'bottom' ? 'items-end pb-2' : 'items-center'
                    }`}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: currentCardIndex * 0.5
                    }}
                  >
                    <div 
                      className={`relative rounded-2xl bg-gradient-to-br from-peach-200 to-oat-200 shadow-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-yellow-300 ${
                        storyEvents[currentCardIndex]?.imageLayout === 'full-width' ? 'w-full max-w-sm h-48 p-2' :
                        storyEvents[currentCardIndex]?.imageLayout === 'floating' ? 'w-full max-w-lg h-52 p-3' :
                        'w-full max-w-sm h-48 p-2'
                      }`}
                    >
                      {storyEvents[currentCardIndex]?.doodleImage?.endsWith('.mp4') ? (
                        <video
                          src={storyEvents[currentCardIndex]?.doodleImage}
                          className="w-full h-full object-contain rounded-xl"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <Image
                          src={storyEvents[currentCardIndex]?.doodleImage || "/assests/temple_visit.png"}
                          alt={storyEvents[currentCardIndex]?.doodleAlt || "Love story moment"}
                          width={storyEvents[currentCardIndex]?.imageWidth || 300}
                          height={storyEvents[currentCardIndex]?.imageHeight || 200}
                          className="w-full h-full object-contain rounded-xl"
                          priority={true}
                          loading="eager"
                          unoptimized={false}
                        />
                      )}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Enhanced gradient overlay with consistent colors */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-5 bg-gradient-to-br from-peach-200 to-oat-200"
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Enhanced Progress Indicators */}
          <motion.div 
            className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {storyEvents.map((event, idx) => (
              <motion.div
                key={idx}
                className="rounded-full border-2 border-white/40 backdrop-blur-sm"
                animate={{
                  backgroundColor: idx === currentCardIndex 
                    ? "rgba(212, 165, 116, 0.8)" // peach-600 with opacity
                    : "rgba(255, 255, 255, 0.3)",
                  borderColor: idx === currentCardIndex
                    ? "rgba(184, 147, 95, 0.5)" // oat-600 with opacity
                    : "rgba(255, 255, 255, 0.4)",
                  width: idx === currentCardIndex ? "16px" : "10px",
                  height: idx === currentCardIndex ? "16px" : "10px",
                  scale: idx === currentCardIndex ? 1.2 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{
                  scale: 1.3,
                  backgroundColor: "rgba(212, 165, 116, 0.6)", // peach-600 with opacity
                }}
              />
            ))}
          </motion.div>
          {/* Enhanced Floating Background Elements */}
          <FloatingDoodles />


          {/* Decorative Divider - Top */}
          <div className="absolute top-0 left-0 right-0 h-1 flex justify-center items-center pointer-events-none">
            <div className="flex space-x-2">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-gradient-to-r from-amber-300 to-yellow-400"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </div>

          {/* Decorative Divider - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 flex justify-center items-center pointer-events-none">
            <div className="flex space-x-3">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500"
                  animate={{
                    opacity: [0.4, 0.9, 0.4],
                    scale: [0.9, 1.3, 0.9],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>

          {/* Wavy Line Motifs - Left and Right */}
          <div className="absolute top-1/4 left-4 w-16 h-1 pointer-events-none">
            <motion.div
              className="w-full h-full bg-gradient-to-r from-amber-200 to-yellow-300 rounded-full"
              animate={{
                scaleX: [0.5, 1, 0.5],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="absolute top-3/4 right-4 w-12 h-1 pointer-events-none">
            <motion.div
              className="w-full h-full bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full"
              animate={{
                scaleX: [0.3, 1, 0.3],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </>
      )}


      {/* Debug Info - Remove in production */}
      {/* {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50 font-mono backdrop-blur-sm border border-white/20">
          <div>Progress: {(scrollYProgress.get() * 100).toFixed(1)}%</div>
          <div>Card Active: {showCard ? 'Yes' : 'No'}</div>
          <div>Current Card: {currentCardIndex + 1}/{storyEvents.length}</div>
          <div>Section Height: {dimensions.sectionHeight.toFixed(0)}px</div>
          <div style={{ color: "#d4a574" }}>
            Current Card: {storyEvents[currentCardIndex]?.title}
          </div>
        </div>
      )} */}
    </motion.section>
  );
}
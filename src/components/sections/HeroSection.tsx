"use client";

import { motion } from "framer-motion";
import StaggeredText from "@/components/StaggeredText";
import Timer from "@/components/countdown";
import { FloatingDoodles } from "@/components/DoodleArt";
import { AnimatedArrow, CTAButton } from "./CommonComponents";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-100 via-oat-50 to-peach-50 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
        `
      }}
    >
      <FloatingDoodles />
      
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: "20%",
            top: "30%",
            background: "#86efac"
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 5, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: "80%",
            top: "20%",
            background: "#fcd34d"
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, -5, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: "60%",
            top: "70%",
            background: "#d8b4fe"
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 3, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 2
          }}
        />
        <motion.div
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: "30%",
            top: "80%",
            background: "#fcd34d"
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, -3, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            delay: 3
          }}
        />
      </div>

      <div className="relative z-20 text-center px-8 max-w-6xl mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-20"
        >
          {/* Desktop: Single line */}
          <div className="hidden md:block">
            <StaggeredText
              text="BOOBANA & GIRI"
              className="text-7xl md:text-8xl lg:text-9xl font-handwritten text-navy-800 tracking-widest-em uppercase text-center mb-16 transform -rotate-1"
              direction="up"
              triggerOnLoad={true}
            />
          </div>
          
          {/* Mobile: Three lines */}
          <div className="block md:hidden text-center mb-16">
            <StaggeredText
              text="BOOBANA"
              className="text-5xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform -rotate-1"
              direction="up"
              triggerOnLoad={true}
            />
            <StaggeredText
              text="&"
              className="text-4xl font-script text-navy-800 tracking-widest-em uppercase block my-2 transform rotate-1"
              direction="up"
              triggerOnLoad={true}
            />
            <StaggeredText
              text="GIRI"
              className="text-5xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform rotate-1"
              direction="up"
              triggerOnLoad={true}
            />
          </div>
          
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-4xl md:text-5xl font-doodle text-navy-700 tracking-wide-em transform rotate-1">
              WEDDING CELEBRATION
            </p>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-navy-600 font-medium leading-emotional"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            November 22nd & 23rd, 2025 • Namakkal, Tamil Nadu
          </motion.p>
        </motion.div>

        {/* Event Details Banner */}
        <motion.div
          className="mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-xl p-4 shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-5 h-5 text-yellow-500">⭐</div>
                <h3 className="text-lg font-doodle text-navy-800 tracking-widest-em uppercase">
                  THE BIG DAYS
                </h3>
                <div className="w-5 h-5 text-yellow-500">⭐</div>
              </div>
              <div className="space-y-2 text-sm leading-emotional">
                <p className="font-bold text-navy-700">November 22nd & 23rd, 2025</p>
                <p className="text-navy-600">Namakkal, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Countdown Section */}
        <motion.div
          className="mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-mint-200 to-gentle-200 rounded-xl p-4 shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-6 h-6 text-pink-400">🌸</div>
                <h3 className="text-lg font-sketch text-navy-800 mb-4 tracking-widest-em uppercase">
                  COUNTDOWN TO OUR SPECIAL DAY
                </h3>
                <div className="w-6 h-6 text-pink-400">🌸</div>
              </div>
              <Timer />
            </div>
          </div>
        </motion.div>

        {/* CTA Button with Arrows */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <AnimatedArrow direction="left" delay={1.3} />
          <CTAButton href="#story">
            DISCOVER OUR STORY
          </CTAButton>
          <AnimatedArrow direction="right" delay={1.3} />
        </motion.div>
      </div>
    </section>
  );
}

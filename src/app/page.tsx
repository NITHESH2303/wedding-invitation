"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "@/components/countdown";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import { DoodleHeart, DoodleStar, DoodleFlower, DoodleArrow, DoodleFrame, FloatingDoodles } from "@/components/DoodleArt";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animationConfig = {
    duration: 0.8,
    ease: "easeOut",
    stagger: 0.2,
  };

  const timelineItems = [
    {
      id: 1,
      title: "The First Meeting",
      description:
        "It all began with a photo shared in the family. Everyone was convinced it was a perfect match… except Boobana. She wanted to meet him first.",
      date: "March 2024",
      icon: "📸",
      color: "bg-mint-100 text-mint-600",
    },
    {
      id: 2,
      title: "The Temple Meet",
      description:
        "The first meeting happened at a temple, surrounded by family. It was quiet — too quiet. Giri kept it polite, asking a few basic questions.",
      date: "April 2024",
      icon: "🕉️",
      color: "bg-gentle-100 text-gentle-600",
    },
    {
      id: 3,
      title: "The Bangalore Twist",
      description:
        "Not satisfied, Boobana decided to meet him again — this time in Bangalore, just the two of them. That's when the real Giri showed up!",
      date: "May 2024",
      icon: "🚉",
      color: "bg-gentle-100 text-gentle-600",
    },
    {
      id: 4,
      title: "The Blue Shirt Saga",
      description:
        "Here's the running family joke — every single time Giri showed up, he wore a blue shirt. At one point, everyone started to wonder if he even owned another color.",
      date: "June 2024",
      icon: "👕",
      color: "bg-dusty-100 text-dusty-600",
    },
    {
      id: 5,
      title: "The Proposal",
      description:
        "After months of laughter, late-night calls, and countless blue shirts, Giri finally popped the question. And yes, he was wearing blue that day too!",
      date: "July 2024",
      icon: "💍",
      color: "bg-mint-100 text-mint-600",
    },
  ];

  if (!isMounted) {
    return (
      <main className="bg-peach-300 text-navy-800 overflow-hidden font-['Inter',sans-serif]">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-navy-800 tracking-widest-em uppercase mb-16">
              BOOBANA & GIRI
            </h1>
            <p className="text-4xl md:text-5xl font-bold text-navy-700 tracking-wide-em mb-8">
              WEDDING CELEBRATION
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-peach-300 text-navy-800 overflow-hidden font-['Inter',sans-serif]">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-peach-300/90 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="font-extrabold text-2xl text-navy-800">B&G</div>
          <nav className="hidden md:flex space-x-8 font-medium text-navy-700">
            <a
              href="#story"
              className="hover:text-navy-800 transition-colors relative group"
            >
              Story
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mint-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#events"
              className="hover:text-navy-800 transition-colors relative group"
            >
              Events
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mint-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#rsvp"
              className="hover:text-navy-800 transition-colors relative group"
            >
              RSVP
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mint-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <motion.button
            className="md:hidden text-navy-800 text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? "✕" : "☰"}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
      {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-peach-300 z-40 flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          <nav className="flex flex-col items-center space-y-8">
              {["Home", "Story", "Events", "Couple", "RSVP"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl text-navy-800 font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, color: "#1e293b" }}
                  >
                    {item}
                  </motion.a>
                )
              )}
          </nav>
          </motion.div>
      )}
      </AnimatePresence>

      {/* Cinematic Hero Section - Much Larger */}
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
        {/* Floating Doodles */}
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
            <div className="hidden md:block">
              <StaggeredText
                text="BOOBANA & GIRI"
                className="text-7xl md:text-8xl lg:text-9xl font-handwritten text-navy-800 tracking-widest-em uppercase text-center mb-16 transform -rotate-1"
                direction="up"
                triggerOnLoad={true}
              />
            </div>

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
              <DoodleHeart className="w-8 h-8 text-pink-400" />
              <p className="text-4xl md:text-5xl font-doodle text-navy-700 tracking-wide-em transform rotate-1">
                WEDDING CELEBRATION
              </p>
              <DoodleHeart className="w-8 h-8 text-pink-400" />
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationConfig.duration, delay: 0.7, ease: "easeOut" }}
          >
            <DoodleFrame className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <DoodleStar className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-doodle text-navy-800 tracking-widest-em uppercase">
                    THE BIG DAYS
                  </h3>
                  <DoodleStar className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="space-y-2 text-sm leading-emotional">
                  <p className="font-bold text-navy-700">November 22nd & 23rd, 2025</p>
                  <p className="text-navy-600">Namakkal, Tamil Nadu</p>
                </div>
              </div>
            </DoodleFrame>
          </motion.div>

          <motion.div
            className="mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationConfig.duration, delay: 0.9, ease: "easeOut" }}
          >
            <DoodleFrame className="bg-gradient-to-r from-mint-200 to-gentle-200 rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <DoodleFlower className="w-6 h-6 text-pink-400" />
                  <h3 className="text-lg font-sketch text-navy-800 mb-4 tracking-widest-em uppercase">
                    COUNTDOWN TO OUR SPECIAL DAY
                  </h3>
                  <DoodleFlower className="w-6 h-6 text-pink-400" />
                </div>
                <Timer />
              </div>
            </DoodleFrame>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <DoodleArrow className="w-12 h-6 text-mint-400" />
            <motion.a
              href="#story"
              className="inline-block bg-gradient-to-r from-mint-300 to-gentle-300 text-navy-800 px-12 py-4 rounded-full text-xl font-handwritten uppercase tracking-widest-em transition-all duration-300 shadow-lg hover:shadow-xl transform -rotate-1"
              whileHover={{
                scale: 1.05,
                y: -2,
                rotate: 0
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Discover our love story and wedding journey"
            >
              DISCOVER OUR STORY
            </motion.a>
            <DoodleArrow className="w-12 h-6 text-mint-400 scale-x-[-1]" />
          </motion.div>
            </div>
      </section>

      <section
        id="story"
        className="py-8 relative"
        style={{
          background: 'linear-gradient(180deg, #f3edea 0%, #f9f6f1 50%, #f7f5f2 100%)', // Love chapter - soft blush to peach transition
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(251, 191, 36, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
          `
        }}
      >
        {/* Cinematic Sectional Transition */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-oat-300 to-blush-300" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
        }}></div>
        
        {/* Floating Doodles */}
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
            <motion.p
              className="text-xl md:text-2xl text-navy-600 font-medium leading-emotional"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A journey of two hearts finding each other
            </motion.p>
          </ScrollReveal>

          <motion.div
            className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-xl p-4 shadow-lg mb-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-extrabold text-navy-800 mb-3 tracking-widest-em uppercase">
                FROM FIRST MEET TO FOREVER
              </h3>
              <p className="text-sm text-navy-600 font-medium leading-emotional">
                Every love story is beautiful, but ours is ours. From that first temple meeting to countless Bangalore adventures, here&apos;s how we found each other.
              </p>
            </div>
          </motion.div>

          <AnimatedTimeline items={timelineItems} />
        </div>
      </section>

      {/* Chapter 2: Celebration - Warm Oat Base */}
      <section 
        id="events" 
        className="py-8 relative"
        style={{
          background: 'linear-gradient(180deg, #f7f5f2 0%, #f9f6f1 50%, #f3edea 100%)' // Celebration chapter - peach to oat to blush transition
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-blush-300 to-oat-300" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
        }}></div>
        
        {/* Floating Doodles */}
        <FloatingDoodles />
        
        <div className="max-w-4xl mx-auto px-8 py-8">
          <ScrollReveal direction="up" className="text-center mb-8">
            {/* Desktop: Single line */}
            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-4 mb-8">
                <DoodleStar className="w-8 h-8 text-yellow-400" />
                <StaggeredText
                  text="THE BIG DAYS"
                  className="text-5xl md:text-6xl font-handwritten text-navy-800 mb-8 tracking-widest-em uppercase transform -rotate-1"
                  direction="up"
                />
                <DoodleStar className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            
            {/* Mobile: Two lines */}
            <div className="block md:hidden text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <DoodleStar className="w-6 h-6 text-yellow-400" />
                <StaggeredText
                  text="THE BIG"
                  className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform -rotate-1"
                  direction="up"
                />
                <DoodleStar className="w-6 h-6 text-yellow-400" />
              </div>
              <StaggeredText
                text="DAYS"
                className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform rotate-1"
                direction="up"
              />
            </div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-navy-600 font-script leading-emotional mb-4">
                &ldquo;Mark your calendars - it&apos;s going to be legendary!&rdquo;
              </p>
              <div className="flex items-center justify-center gap-2">
                <DoodleHeart className="w-5 h-5 text-pink-400" />
                <DoodleStar className="w-5 h-5 text-yellow-400" />
                <DoodleFlower className="w-5 h-5 text-pink-300" />
              </div>
            </motion.div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <DoodleFrame className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <DoodleStar className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform -rotate-1">
                    THE RECEPTION
                </h3>
                  <DoodleStar className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="space-y-4 mb-6">
                <div>
                    <p className="font-bold text-lg text-navy-700">November 22nd, 2025</p>
                    <p className="text-navy-600">6:00 PM - 10:00 PM</p>
                    <p className="text-navy-500">Aishwarya Mahal, Namakkal</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl">
                    <p className="font-bold text-navy-800 mb-2">What to expect:</p>
                    <ul className="text-navy-700 space-y-1 leading-emotional text-sm">
                      <li>• Unlimited South Indian feast</li>
                      <li>• DJ + Live music</li>
                      <li>• Surprise sweet moments</li>
                      <li>• Catch-ups, chaos, and cousins</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-mint-100 p-4 rounded-xl">
                  <p className="text-navy-800 font-bold leading-emotional text-sm">
                    Dress Code: Party ready! Come to dance, eat, laugh, and celebrate.
                  </p>
                </div>
              </div>
              </DoodleFrame>
            </motion.div>

            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <DoodleFrame className="bg-gradient-to-r from-dusty-200 to-gentle-200 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <DoodleFlower className="w-6 h-6 text-pink-400" />
                  <h3 className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform rotate-1">
                    THE WEDDING
                </h3>
                  <DoodleFlower className="w-6 h-6 text-pink-400" />
              </div>
              <div className="space-y-4 mb-6">
                <div>
                    <p className="font-bold text-lg text-navy-700">November 23rd, 2025</p>
                    <p className="text-navy-600">4:30 AM - 10:00 AM</p>
                    <p className="text-navy-500">Aishwarya Mahal, Namakkal</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl">
                    <p className="font-bold text-navy-800 mb-2">What to expect:</p>
                    <ul className="text-navy-700 space-y-1 leading-emotional text-sm">
                      <li>• Sunrise fire ritual & blessing</li>
                      <li>• Flower shower & garland draping</li>
                      <li>• Candid family selfies</li>
                      <li>• Happy tears and lifelong memories</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gentle-100 p-4 rounded-xl">
                  <p className="text-navy-800 font-bold leading-emotional text-sm">
                    Early bird club! Traditional attire encouraged—bright sarees & crisp dhotis.
                  </p>
                </div>
              </div>
              </DoodleFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Couple - Soft Peach Base */}
      <section
        id="couple"
        className="py-8 relative"
        style={{
          background: 'linear-gradient(180deg, #f3edea 0%, #f7f5f2 50%, #f9f6f1 100%)' // Couple chapter - blush to peach to oat transition
        }}
      >
        {/* Cinematic Sectional Transition */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-oat-300 to-peach-300" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
        }}></div>
        
        {/* Floating Doodles */}
        <FloatingDoodles />
        
        <div className="max-w-4xl mx-auto px-8 py-8">
          <ScrollReveal direction="up" className="text-center mb-8">
            {/* Desktop: Single line */}
            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-4 mb-8">
                <DoodleHeart className="w-8 h-8 text-pink-400" />
                <StaggeredText
                  text="DYNAMIC DUO"
                  className="text-5xl md:text-6xl font-handwritten text-navy-800 mb-8 tracking-widest-em uppercase transform -rotate-1"
                  direction="up"
                />
                <DoodleHeart className="w-8 h-8 text-pink-400" />
              </div>
            </div>
            
            {/* Mobile: Two lines */}
            <div className="block md:hidden text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <DoodleHeart className="w-6 h-6 text-pink-400" />
                <StaggeredText
                  text="DYNAMIC"
                  className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform -rotate-1"
                  direction="up"
                />
                <DoodleHeart className="w-6 h-6 text-pink-400" />
              </div>
              <StaggeredText
                text="DUO"
                className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform rotate-1"
                direction="up"
              />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Boobana Card - Smaller */}
            <ScrollReveal direction="left" delay={0.2}>
              <motion.div
                className="max-w-md mx-auto"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <DoodleFrame className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-2xl p-6 shadow-xl">
            <div className="text-center">
                  <div 
                    className="art-placeholder rounded-full mx-auto mb-6 bg-gradient-to-r from-gentle-200 to-mint-200 shadow-lg flex items-center justify-center text-lg font-bold w-20 h-20 text-3xl"
                    aria-label="Boobana portrait illustration"
                  >
                    👰‍♀️
              </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <DoodleFlower className="w-6 h-6 text-pink-400" />
                    <h3 className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform -rotate-1">
                      BOOBANA
                    </h3>
                    <DoodleFlower className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl">
                    <p className="text-navy-700 leading-emotional text-base font-medium">
                      The sunshine of the story — the one who plans everything,
                      forgets where she kept it, then laughs her way through it
                      anyway. Loves coffee, chaos, and making sure everyone&apos;s fed.
                </p>
              </div>
            </div>
              </DoodleFrame>
              </motion.div>
            </ScrollReveal>

            {/* Giri Card - Smaller */}
            <ScrollReveal direction="right" delay={0.4}>
              <motion.div
                className="max-w-md mx-auto"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <DoodleFrame className="bg-gradient-to-r from-dusty-200 to-gentle-200 rounded-2xl p-6 shadow-xl">
            <div className="text-center">
                  <div 
                    className="art-placeholder rounded-full mx-auto mb-6 bg-gradient-to-r from-gentle-200 to-mint-200 shadow-lg flex items-center justify-center text-lg font-bold w-20 h-20 text-3xl"
                    aria-label="Giri portrait illustration"
                  >
                    🤵‍♂️
              </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <DoodleStar className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform rotate-1">
                      GIRI
                    </h3>
                    <DoodleStar className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl">
                    <p className="text-navy-700 leading-emotional text-base font-medium">
                      The calm in the storm — a problem solver, a dream chaser,
                      and occasionally the reason Wi-Fi stops working. Big ideas,
                      bigger heart, and a secret talent for pretending he&apos;s not
                      emotional.
                </p>
              </div>
            </div>
              </DoodleFrame>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" className="text-center mt-12">
            <motion.div
              className="bg-gradient-to-r from-mint-200 to-gentle-200 rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-extrabold text-navy-800 mb-4 tracking-widest-em uppercase">
                  PERFECT TOGETHER
                </h3>
                <p className="text-lg text-navy-600 font-medium leading-emotional">
                  Together, they&apos;re the perfect blend of calm and chaos, laughter
                  and love — proof that soulmates don&apos;t just exist in movies.
                  They&apos;re living theirs.
            </p>
          </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="rsvp"
        className="py-8 relative"
        style={{
          background: 'linear-gradient(180deg, #f9f6f1 0%, #f3edea 50%, #f7f5f2 100%)'
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-peach-300 to-blush-300" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
        }}></div>
        
        {/* Floating Doodles */}
        <FloatingDoodles />
        
        <div className="max-w-4xl mx-auto px-8 py-8">
          <ScrollReveal direction="up" className="text-center mb-8">
            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-4 mb-8">
                <DoodleFlower className="w-8 h-8 text-pink-400" />
                <StaggeredText
                  text="JOIN THE PARTY"
                  className="text-5xl md:text-6xl font-handwritten text-navy-800 mb-8 tracking-widest-em uppercase transform -rotate-1"
                  direction="up"
                />
                <DoodleFlower className="w-8 h-8 text-pink-400" />
              </div>
            </div>

            <div className="block md:hidden text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <DoodleFlower className="w-6 h-6 text-pink-400" />
                <StaggeredText
                  text="JOIN THE"
                  className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform -rotate-1"
                  direction="up"
                />
                <DoodleFlower className="w-6 h-6 text-pink-400" />
              </div>
              <StaggeredText
                text="PARTY"
                className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform rotate-1"
                direction="up"
              />
            </div>
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-navy-600 font-script leading-emotional mb-4">
                &ldquo;We can&apos;t wait to celebrate together!&rdquo;
              </p>
              <p className="text-lg md:text-xl text-navy-500 font-medium leading-emotional">
                Please let us know you&apos;re coming so we can prepare the perfect celebration for you.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <DoodleHeart className="w-5 h-5 text-pink-400" />
                <DoodleStar className="w-5 h-5 text-yellow-400" />
                <DoodleFlower className="w-5 h-5 text-pink-300" />
          </div>
            </motion.div>
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <DoodleFrame className="bg-gradient-to-r from-mint-100 to-gentle-100 rounded-2xl p-6">
                <p className="text-lg text-navy-700 font-medium leading-emotional">
                  💕 We can&apos;t wait to celebrate together! 💕
                </p>
              </DoodleFrame>
            </motion.div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl max-w-lg mx-auto lg:max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
            >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-bold text-navy-800 mb-3 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-5 border-2 border-navy-200 rounded-xl focus:ring-2 focus:ring-mint-300 focus:border-mint-300 transition-all duration-300 focus:scale-105 text-lg"
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-bold text-navy-800 mb-3 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full p-5 border-2 border-navy-200 rounded-xl focus:ring-2 focus:ring-mint-300 focus:border-mint-300 transition-all duration-300 focus:scale-105 text-lg"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-bold text-navy-800 mb-3 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-5 border-2 border-navy-200 rounded-xl focus:ring-2 focus:ring-mint-300 focus:border-mint-300 transition-all duration-300 focus:scale-105 text-lg"
                    placeholder="+91 98765 43210"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-bold text-navy-800 mb-4 uppercase tracking-wider">
                    Which events will you attend?
                  </label>
                  <div className="space-y-4">
                    <motion.label
                      className="flex items-center cursor-pointer p-4 bg-mint-50 rounded-xl hover:bg-mint-100 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="checkbox"
                        className="mr-4 h-5 w-5 text-mint-500 rounded"
                      />
                      <span className="text-navy-800 font-medium text-lg">Reception Party - Nov 22nd</span>
                    </motion.label>
                    <motion.label
                      className="flex items-center cursor-pointer p-4 bg-gentle-50 rounded-xl hover:bg-gentle-100 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="checkbox"
                        className="mr-4 h-5 w-5 text-gentle-500 rounded"
                      />
                      <span className="text-navy-800 font-medium text-lg">Wedding Ceremony - Nov 23rd</span>
                    </motion.label>
                </div>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-mint-300 to-gentle-300 text-navy-800 font-extrabold py-5 px-8 rounded-xl text-xl uppercase tracking-widest-em transition-all duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  RSVP NOW
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div 
                className="art-placeholder rounded-2xl shadow-lg bg-gradient-to-r from-gentle-200 to-mint-200 flex items-center justify-center text-lg font-bold w-48 h-48 md:w-56 md:h-56 text-5xl md:text-6xl"
                aria-label="RSVP celebration illustration"
              >
                🎉
              </div>
            </motion.div>
          </div>

          <ScrollReveal
            direction="up"
            className="text-center mt-12"
          >
            <motion.div
              className="bg-gradient-to-r from-mint-200 to-gentle-200 rounded-2xl p-6 shadow-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl md:text-2xl font-extrabold text-navy-800 mb-4 tracking-widest-em uppercase">
                QUESTIONS?
              </h3>
              <p className="text-lg text-navy-600 font-medium mb-3 leading-emotional">
                We&apos;d love to hear from you! Feel free to reach out anytime.
              </p>
              <p className="text-navy-500 leading-emotional">
                Boobana: +91 98765 43210 | Giri: +91 98765 43211
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

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
    </main>
  );
}
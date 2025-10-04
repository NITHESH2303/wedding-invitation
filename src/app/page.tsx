"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Section Components
import HeroSection from "@/components/sections/HeroSection";
import LoveStorySection from "@/components/sections/LoveStorySection";
import EventsSection from "@/components/sections/EventsSection";
import CoupleSection from "@/components/sections/CoupleSection";
import RSVPSection from "@/components/sections/RSVPSection";
import FooterSection from "@/components/sections/FooterSection";

// Skeleton Loader
import SkeletonLoader from "@/components/SkeletonLoader";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <SkeletonLoader />;
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

      {/* Main Content */}
      <HeroSection />
      <LoveStorySection />
      <EventsSection />
      <CoupleSection />
      <RSVPSection />
      <FooterSection />
    </main>
  );
}
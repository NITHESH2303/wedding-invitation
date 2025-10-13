"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Section Components
import HeroSection from "@/components/sections/HeroSection";
import LoveStorySection from "@/components/sections/LoveStorySection";
import EventsSection from "@/components/sections/EventsSection";
import CoupleSection from "@/components/sections/CoupleSection";
import RSVPSection from "@/components/sections/RSVPSection";
import VenueLocation from "@/components/sections/VenueLocation";
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
          <a href="#home" className="font-script text-3xl md:text-4xl text-navy-800 hover:opacity-80 transition-opacity">
            B&G
          </a>
          <nav className="hidden md:flex space-x-6 lg:space-x-8 font-medium text-navy-700">
            <a
              href="#story"
              className="hover:text-navy-800 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('story')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Story
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mint-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#events"
              className="hover:text-navy-800 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Events
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mint-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#couple"
              className="hover:text-navy-800 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Couple
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mint-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#rsvp"
              className="hover:text-navy-800 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              RSVP
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mint-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#venue"
              className="hover:text-navy-800 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Venue
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden bg-gradient-to-br from-oat-50/98 via-oat-300/98 to-peach-400/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          <nav className="flex flex-col items-center space-y-6">
              {["Home", "Story", "Events", "Couple", "RSVP", "Venue"].map(
                (item, index) => {
                  const targetId = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase();
                  return (
                    <motion.a
                      key={item}
                      href={`#${targetId}`}
                      className="text-2xl text-navy-800 font-semibold px-8 py-4 rounded-2xl bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 shadow-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        setTimeout(() => {
                          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.a>
                  );
                }
              )}
          </nav>
          </motion.div>
        )}
      </AnimatePresence>

              <HeroSection />
              <LoveStorySection />
              <EventsSection />
              <CoupleSection />
              <RSVPSection />
              <div id="venue">
                <VenueLocation />
              </div>
              <FooterSection />
    </main>
  );
}
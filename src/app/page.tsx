"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "@/components/countdown";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";
import VideoBackground from "@/components/VideoBackground";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedIcon from "@/components/AnimatedIcon";
import AnimatedTimeline from "@/components/AnimatedTimeline";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hero section rotating texts
  const heroTexts = [
    "Boobana & Giri",
    "Two Hearts, One Love",
    "November 22nd & 23rd, 2025",
    "Join Our Celebration!"
  ];

  // Timeline data for the love story
  const timelineItems = [
    {
      id: 1,
      title: "The First Meeting",
      description: "It all began with a photo shared in the family. Everyone was convinced it was a perfect match… except Boobana. She wanted to meet him first.",
      date: "March 2024",
      icon: "📸",
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "The Temple Meet",
      description: "The first meeting happened at a temple, surrounded by family. It was quiet — too quiet. Giri kept it polite, asking a few basic questions.",
      date: "April 2024",
      icon: "🕉️",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 3,
      title: "The Bangalore Twist",
      description: "Not satisfied, Boobana decided to meet him again — this time in Bangalore, just the two of them. That's when the real Giri showed up!",
      date: "May 2024",
      icon: "🚉",
      color: "bg-green-100 text-green-600"
    },
    {
      id: 4,
      title: "The Blue Shirt Saga",
      description: "Here's the running family joke — every single time Giri showed up, he wore a blue shirt. At one point, everyone started to wonder if he even owned another color.",
      date: "June 2024",
      icon: "👕",
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 5,
      title: "The Adventures Begin",
      description: "From there, it was countless Bangalore trips, endless conversations, and laughter that never ran out. The 'arranged' quietly turned into 'their story.'",
      date: "July 2024",
      icon: "🚗",
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 6,
      title: "The Proposal",
      description: "Families met, rings were exchanged, shopping marathons survived — and now it's time for the grand celebration.",
      date: "August 2024",
      icon: "💍",
      color: "bg-pink-100 text-pink-600"
    }
  ];


  return (
    <main className="bg-[#FFF8F0] text-[#333333] overflow-hidden">
      {/* Animated Header */}
      <motion.header 
        className="bg-[#FFF8F0]/80 backdrop-blur-sm border-b border-red-200 sticky top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-extrabold text-[#E53935]"
            whileHover={{ scale: 1.1, color: "#C62828" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            B & G
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Story", "Events", "Couple", "RSVP"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#333333] hover:text-[#E53935] transition-colors font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -2, color: "#E53935" }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Hamburger Button */}
          <motion.button
            className="md:hidden text-[#333333] text-3xl"
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
            className="fixed inset-0 bg-[#FFF8F0] z-40 flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-center space-y-8">
              {["Home", "Story", "Events", "Couple", "RSVP"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl text-[#333333] font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "#E53935" }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Enhanced Visual Grouping */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF8F0] via-red-50 to-pink-50 overflow-hidden">
        {/* Background Video with Fallback */}
        <div className="absolute inset-0">
          <VideoBackground
            videoSrc="/hero-video.mp4"
            texts={heroTexts}
            interval={4000}
            className="absolute inset-0"
          />
          {/* Fallback Background if video fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-red-50 to-pink-50">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">💍</div>
            <div className="absolute top-20 right-20 text-5xl opacity-20 animate-bounce">💕</div>
            <div className="absolute bottom-20 left-20 text-4xl opacity-20 animate-pulse">🎊</div>
            <div className="absolute bottom-10 right-10 text-5xl opacity-20 animate-bounce">👰‍♀️🤵‍♂️</div>
          </div>
        </div>
        
        {/* Main Hero Content - Tightly Grouped */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Couple Image with Fallback */}
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                <img 
                  src="/couple-engagement.jpg" 
                  alt="Couple engagement photo: Boobana & Giri, all smiles and sparkle!"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                  className="rounded-full shadow-2xl h-32 w-32 md:h-40 md:w-40 object-cover border-4 border-[#E53935]/20"
                />
                {/* Fallback UI */}
                <div className="hidden fallback flex items-center justify-center h-32 w-32 md:h-40 md:w-40 bg-gradient-to-br from-pink-100 to-red-100 rounded-full text-2xl md:text-3xl font-extrabold text-[#E53935] border-4 border-[#E53935]/20 shadow-2xl">
                  👫 B&G
                </div>
              </div>
            </motion.div>

            {/* Couple Names - Bold and Playful */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mb-4"
            >
              <StaggeredText
                text="Boobana & Giri"
                className="text-5xl md:text-7xl font-extrabold text-[#333333] mb-2"
                direction="up"
              />
            </motion.div>

            {/* Wedding Announcement - Elegant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#E53935] mb-2">
                🎉 Wedding Celebration
              </h2>
              <div className="space-y-1 text-lg md:text-xl">
                <p className="font-semibold text-[#333333]">November 22nd & 23rd, 2025</p>
                <p className="text-[#333333]/70">Namakkal, Tamil Nadu</p>
                <p className="text-[#E53935] font-bold">
                  Let's party together! 🎊
                </p>
              </div>
            </motion.div>

            {/* Countdown Timer - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-6"
            >
              <Timer />
            </motion.div>

            {/* CTA Button - Enhanced */}
            <motion.a
              href="#story"
              className="inline-block bg-gradient-to-r from-[#E53935] to-[#C62828] hover:from-[#C62828] hover:to-[#B71C1C] text-white px-8 py-4 rounded-full text-xl font-extrabold transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 15px 35px rgba(229, 57, 53, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Discover our love story and wedding journey"
            >
              Discover Our Story ❤️
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section with Timeline */}
      <section id="story" className="py-24 bg-[#FFF8F0] bg-gradient-to-br from-[#FFF8F0] to-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <StaggeredText
              text="Our Love Story"
              className="text-5xl font-extrabold text-[#333333] mb-4"
              direction="up"
            />
            <motion.p
              className="text-xl text-[#333333]/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A journey of two hearts finding each other 💕
            </motion.p>
          </ScrollReveal>

          <AnimatedTimeline items={timelineItems} />
        </div>
      </section>

      {/* Events Section with Animated Cards */}
      <section id="events" className="py-20 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <StaggeredText
              text="Two Days of Epic Fun!"
              className="text-5xl font-extrabold text-[#333333] mb-4"
              direction="up"
            />
            <motion.p
              className="text-xl text-[#333333]/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Mark your calendars - it's going to be legendary! 🎪
            </motion.p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.2} className="group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-extrabold text-[#E53935]">
                  🕺 Wedding Reception
                </h3>
                <AnimatedIcon animation="bounce" className="text-4xl">
                  🎉
                </AnimatedIcon>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-lg text-[#333333]">November 22nd, 2025</p>
                  <p className="text-[#333333]/70">6:00 PM - 10:00 PM</p>
                  <p className="text-[#333333]/70">Aishwarya Mahal, Namakkal</p>
                </div>
                <div className="border-l-4 border-[#E53935]/30 pl-4">
                  <p className="font-semibold text-[#E53935]">What to expect:</p>
                  <ul className="text-[#333333]/70 list-disc list-inside space-y-1">
                    <li>Unlimited South Indian feast</li>
                    <li>DJ + Live music</li>
                    <li>Surprise sweet moments</li>
                    <li>Catch-ups, chaos, and cousins</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#E53935]/10 p-4 rounded-lg">
                <p className="text-[#E53935] font-semibold">
                  ⚡ Dress Code: Party ready! Come to dance, eat, laugh, and celebrate. 💃
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-extrabold text-[#FFB300]">
                  💒 The Main Event
                </h3>
                <AnimatedIcon animation="float" className="text-4xl">
                  👰‍♀️🤵‍♂️
                </AnimatedIcon>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-lg text-[#333333]">November 23rd, 2025</p>
                  <p className="text-[#333333]/70">4:30 AM - 10:00 AM</p>
                  <p className="text-[#333333]/70">Aishwarya Mahal, Namakkal</p>
                </div>
                <div className="border-l-4 border-[#FFB300]/30 pl-4">
                  <p className="font-semibold text-[#FFB300]">What to expect:</p>
                  <ul className="text-[#333333]/70 list-disc list-inside space-y-1">
                    <li>Sunrise fire ritual & blessing</li>
                    <li>Flower shower & garland draping</li>
                    <li>Candid family selfies</li>
                    <li>Happy tears and lifelong memories</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#FFB300]/10 p-4 rounded-lg">
                <p className="text-[#FFB300] font-semibold">
                  🌅 Early bird club! Traditional attire encouraged—bright sarees & crisp dhotis.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Meet the Couple Section */}
      <section id="couple" className="py-24 bg-gradient-to-br from-[#FFF8F0] to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <StaggeredText
              text="Dynamic Duo"
              className="text-5xl font-extrabold text-[#333333] mb-4"
              direction="up"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="text-center">
                <motion.div
                  className="w-40 h-40 bg-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <AnimatedIcon animation="float" className="text-6xl">
                    👰‍♀️
                  </AnimatedIcon>
                </motion.div>
                <h3 className="text-2xl font-extrabold text-pink-600 mb-2">Boobana</h3>
                <AnimatedCard className="bg-pink-50">
                  <p className="text-[#333333] leading-relaxed">
                    The sunshine of the story — the one who plans everything, forgets where she kept it, then laughs her way through it anyway. Loves coffee, chaos, and making sure everyone's fed.
                  </p>
                </AnimatedCard>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="text-center">
                <motion.div
                  className="w-40 h-40 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <AnimatedIcon animation="pulse" className="text-6xl">
                    🤵‍♂️
                  </AnimatedIcon>
                </motion.div>
                <h3 className="text-2xl font-extrabold text-yellow-600 mb-2">Giri</h3>
                <AnimatedCard className="bg-yellow-50">
                  <p className="text-[#333333] leading-relaxed">
                    The calm in the storm — a problem solver, a dream chaser, and occasionally the reason Wi-Fi stops working. Big ideas, bigger heart, and a secret talent for pretending he's not emotional.
                  </p>
                </AnimatedCard>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" className="text-center mt-16">
            <motion.p
              className="text-lg text-[#333333]/70 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Together, they're the perfect blend of calm and chaos, laughter and love — proof that soulmates don't just exist in movies. They're living theirs.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>


      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-gradient-to-br from-[#FFF8F0] to-red-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-12">
            <StaggeredText
              text="Join Our Epic Celebration!"
              className="text-5xl font-extrabold text-[#333333] mb-4"
              direction="up"
            />
            <motion.p
              className="text-xl text-[#333333]/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Don't ghost us—RSVP so we know how much sambar to make!
            </motion.p>
          </ScrollReveal>

          <AnimatedCard delay={0.3}>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-[#333333] mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53935] transition-all duration-300 focus:scale-105" 
                    placeholder="Enter your full name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold text-[#333333] mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53935] transition-all duration-300 focus:scale-105" 
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-semibold text-[#333333] mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53935] transition-all duration-300 focus:scale-105" 
                  placeholder="+91 98765 43210"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-sm font-semibold text-[#333333] mb-3">Which events will you attend? 🎉</label>
                <div className="space-y-3">
                  <motion.label 
                    className="flex items-center cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <input type="checkbox" className="mr-3 h-4 w-4 text-[#E53935]"/>
                    <span className="text-[#333333]">🕺 Reception Party - Nov 22nd</span>
                  </motion.label>
                  <motion.label 
                    className="flex items-center cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <input type="checkbox" className="mr-3 h-4 w-4 text-[#E53935]"/>
                    <span className="text-[#333333]">💒 Wedding Ceremony - Nov 23rd</span>
                  </motion.label>
                </div>
              </motion.div>

              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#E53935] to-[#C62828] hover:from-[#C62828] hover:to-[#B71C1C] text-white font-extrabold py-4 px-6 rounded-lg text-lg transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: "0 10px 30px rgba(229, 57, 53, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Count Me In! 🎉
              </motion.button>
            </form>
          </AnimatedCard>

          <ScrollReveal direction="up" className="text-center mt-8 text-[#333333]/70">
            <p className="mb-2"><strong>Questions?</strong> WhatsApp us! 📱</p>
            <p>Boobana: +91 98765 43210 | Giri: +91 98765 43211</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-[#333333] text-white py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3 
            className="text-2xl font-extrabold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Boobana & Giri
          </motion.h3>
          <motion.p 
            className="text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            November 22nd & 23rd, 2025 • Namakkal, Tamil Nadu
          </motion.p>
          <motion.div 
            className="border-t border-gray-700 pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <StaggeredText
              text="See You There!"
              className="text-xl font-extrabold text-white"
              direction="up"
            />
            <p className="text-gray-400 mt-2">
              Made with ❤️ for our special day | See you on the dance floor!
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";
import { DoodleFlower, DoodleFrame } from "@/components/DoodleArt";
import { FloatingDoodles } from "@/components/DoodleArt";

export default function RSVPSection() {
  return (
    <section
      id="rsvp"
      className="relative py-20"
      style={{
        background: `
          linear-gradient(135deg, #f9f6f1 0%, #f3edea 50%, #f7f5f2 100%),
          radial-gradient(circle at 30% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
        `
      }}
    >

      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-blush-300 to-oat-300" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
      }}></div>
      
      {/* Floating Doodles */}
      <FloatingDoodles />
      
      <div className="max-w-4xl mx-auto px-8 py-8">
        <ScrollReveal direction="up" className="text-center mb-8" once={false}>
          <div className="hidden md:block">
            <div className="flex items-center justify-center gap-4 mb-8">
              <DoodleFlower className="w-8 h-8 text-pink-400" />
              <StaggeredText
                text="JOIN THE PARTY"
                className="text-5xl md:text-6xl font-handwritten text-navy-800 mb-8 tracking-widest-em uppercase transform -rotate-1"
                direction="up"
                once={false}
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
                once={false}
              />
              <DoodleFlower className="w-6 h-6 text-pink-400" />
            </div>
            <StaggeredText
              text="PARTY"
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
            <p className="text-lg md:text-xl text-navy-600 leading-emotional max-w-3xl mx-auto mb-8 font-script">
              We&apos;d love to celebrate with you! Please let us know if you&apos;ll be joining us for our special day.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* RSVP Form */}
        <ScrollReveal direction="up" delay={0.3} once={false}>
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DoodleFrame className="bg-gradient-to-r from-mint-200 to-gentle-200 rounded-2xl p-8 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-mint-300 focus:border-mint-300 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-mint-300 focus:border-mint-300 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-navy-700 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-mint-300 focus:border-mint-300 transition-colors"
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">Just me (1 guest)</option>
                    <option value="2">Me + 1 guest (2 guests)</option>
                    <option value="3">Me + 2 guests (3 guests)</option>
                    <option value="4">Me + 3 guests (4 guests)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="attending" className="block text-sm font-medium text-navy-700 mb-2">
                    Will you be attending? *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        className="mr-3 text-mint-500 focus:ring-mint-300"
                        required
                      />
                      <span className="text-navy-700">Yes, I&apos;ll be there! 🎉</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        className="mr-3 text-mint-500 focus:ring-mint-300"
                        required
                      />
                      <span className="text-navy-700">Sorry, I can&apos;t make it 😢</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                    Special Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-mint-300 focus:border-mint-300 transition-colors resize-none"
                    placeholder="Share your excitement, dietary restrictions, or any special message..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-mint-400 to-gentle-400 text-navy-800 py-4 px-8 rounded-full text-lg font-handwritten uppercase tracking-widest-em transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SEND RSVP
                </motion.button>
              </form>
            </DoodleFrame>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

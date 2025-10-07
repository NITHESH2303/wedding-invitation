"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";
import { DoodleHeart, DoodleFrame, DoodleStar, DoodleFlower } from "@/components/DoodleArt";
import { FloatingDoodles } from "@/components/DoodleArt";

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="relative py-20"
      style={{
        background: `
          linear-gradient(135deg, #f3edea 0%, #f7f5f2 50%, #f9f6f1 100%),
          radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 60% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
        `
      }}
    >

      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-oat-300 to-peach-300" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
      }}></div>

      <FloatingDoodles />
      
      <div className="max-w-4xl mx-auto px-8 py-8">
        <ScrollReveal direction="up" className="text-center mb-8" once={false}>
          {/* Desktop: Single line */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center gap-4 mb-8 relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <DoodleHeart className="w-8 h-8 text-pink-400" />
              </motion.div>
              
              <div className="relative">
                <StaggeredText
                  text="DYNAMIC DUO"
                  className="text-5xl md:text-6xl font-handwritten text-navy-800 mb-8 tracking-widest-em uppercase transform -rotate-1"
                  direction="up"
                  once={false}
                />
                {/* Floating doodles around title */}
                <motion.div
                  className="absolute -top-6 -right-8"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <DoodleStar className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-8"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <DoodleFlower className="w-8 h-8 text-purple-400" />
                </motion.div>
              </div>
              
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <DoodleHeart className="w-8 h-8 text-pink-400" />
              </motion.div>
            </div>
          </div>
          
          {/* Mobile: Two lines */}
          <div className="block md:hidden text-center mb-8 relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <DoodleHeart className="w-6 h-6 text-pink-400" />
              </motion.div>
              <StaggeredText
                text="DYNAMIC"
                className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform -rotate-1"
                direction="up"
                once={false}
              />
              <motion.div
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <DoodleHeart className="w-6 h-6 text-pink-400" />
              </motion.div>
            </div>
            <div className="relative">
              <StaggeredText
                text="DUO"
                className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform rotate-1"
                direction="up"
                once={false}
              />
              {/* Mobile floating doodles */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <DoodleStar className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-4"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <DoodleFlower className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>
          </div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg md:text-xl text-navy-600 leading-emotional max-w-3xl mx-auto mb-12 font-script">
              Meet the two amazing people who are about to become one. Get to know the couple behind this beautiful celebration.
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Boobana Card */}
          <ScrollReveal direction="left" delay={0.2} once={false}>
            <motion.div
              className="max-w-md mx-auto relative"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Floating doodles around Boobana's card */}
              <motion.div
                className="absolute -top-4 -right-4 z-10"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <DoodleStar className="w-8 h-8 text-pink-400" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-4 z-10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <DoodleFlower className="w-10 h-10 text-purple-400" />
              </motion.div>

              <DoodleFrame className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                {/* Background floating hearts */}
                <motion.div
                  className="absolute top-2 right-2 opacity-20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <DoodleHeart className="w-6 h-6 text-pink-300" />
                </motion.div>
                
                <div className="text-center">
                  <div className="mb-4 relative">
                    <motion.div 
                      className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center mb-4 relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src="/assests/boobana.png"
                        alt="Boobana - The Beautiful Bride"
                        width={128}
                        height={128}
                        className="rounded-full object-cover w-full h-full"
                      />
                      {/* Floating heart on photo */}
                      <motion.div
                        className="absolute -top-2 -right-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <DoodleHeart className="w-6 h-6 text-pink-500" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform -rotate-1"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      BOOBANA
                    </motion.h3>
                  </div>
                  <div className="space-y-3 text-sm leading-emotional">
                    <p className="text-navy-600 font-medium">The Bride</p>
                    <p className="text-navy-500 italic">
                      &ldquo;Kind-hearted, adventurous, and always ready for the next big adventure. 
                      She brings joy and laughter wherever she goes.&rdquo;
                    </p>
                    <div className="flex justify-center gap-2 mt-4">
                      <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">Adventurous</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Creative</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Loving</span>
                    </div>
                  </div>
                </div>
              </DoodleFrame>
            </motion.div>
          </ScrollReveal>

          {/* Giri Card */}
          <ScrollReveal direction="right" delay={0.4} once={false}>
            <motion.div
              className="max-w-md mx-auto relative"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Floating doodles around Giri's card */}
              <motion.div
                className="absolute -top-4 -left-4 z-10"
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <DoodleStar className="w-8 h-8 text-blue-400" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -right-4 z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <DoodleFlower className="w-10 h-10 text-green-400" />
              </motion.div>

              <DoodleFrame className="bg-gradient-to-r from-dusty-200 to-gentle-200 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                {/* Background floating stars */}
                <motion.div
                  className="absolute top-2 left-2 opacity-20"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <DoodleStar className="w-6 h-6 text-blue-300" />
                </motion.div>
                
                <div className="text-center">
                  <div className="mb-4 relative">
                    <motion.div 
                      className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-200 to-green-200 flex items-center justify-center mb-4 relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src="/assests/giri.png"
                        alt="Giri - The Handsome Groom"
                        width={128}
                        height={128}
                        className="rounded-full object-cover w-full h-full"
                      />
                      {/* Floating star on photo */}
                      <motion.div
                        className="absolute -top-2 -left-2"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <DoodleStar className="w-6 h-6 text-blue-500" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform rotate-1"
                      animate={{ y: [0, 2, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      GIRI
                    </motion.h3>
                  </div>
                  <div className="space-y-3 text-sm leading-emotional">
                    <p className="text-navy-600 font-medium">The Groom</p>
                    <p className="text-navy-500 italic">
                      &ldquo;Thoughtful, determined, and with a heart full of love. 
                      He&apos;s the perfect partner for life&apos;s greatest adventure.&rdquo;
                    </p>
                    <div className="flex justify-center gap-2 mt-4">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Thoughtful</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Determined</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Loving</span>
                    </div>
                  </div>
                </div>
              </DoodleFrame>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

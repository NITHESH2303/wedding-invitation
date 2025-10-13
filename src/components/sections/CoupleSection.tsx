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
          <ScrollReveal direction="left" delay={0.2} once={false}>
            <motion.div
              className="max-w-md mx-auto relative"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 pointer-events-none z-10">
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ y: [0, -4, 0], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Image
                    src="/doodles/open-doodles/png/LovingDoodle.png"
                    alt="Loving doodle"
                    width={25}
                    height={25}
                    className="drop-shadow-lg"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-1 -left-2"
                  animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Image
                    src="/doodles/open-doodles/png/DancingDoodle.png"
                    alt="Dancing doodle"
                    width={28}
                    height={28}
                    className="drop-shadow-lg"
                  />
                </motion.div>
              </div>

              <DoodleFrame className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-2xl p-6 shadow-xl relative overflow-hidden">
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
                      className="w-40 h-40 mx-auto flex items-center justify-center mb-4 relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div 
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(244, 166, 199, 0.4) 0%, rgba(212, 165, 212, 0.3) 50%, transparent 100%)',
                          filter: 'blur(12px)',
                          transform: 'scale(1.3)'
                        }}
                      />

                      <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 p-2">
                        <Image
                          src="/assests/boobana.png"
                          alt="The Bride"
                          width={120}
                          height={120}
                          className="object-contain w-full h-full"
                          style={{ filter: 'drop-shadow(0 4px 16px rgba(244, 166, 199, 0.4))' }}
                        />
                      </div>

                      <motion.div
                        className="absolute -top-2 -right-2 z-20"
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
                      &ldquo;Buffalo-hearted, adventurous, and always ready for the next big adventure. 
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

          <ScrollReveal direction="right" delay={0.4} once={false}>
            <motion.div
              className="max-w-md mx-auto relative"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 pointer-events-none z-10">
                <motion.div
                  className="absolute -top-2 -left-2"
                  animate={{ y: [0, -4, 0], rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <Image
                    src="/doodles/open-doodles/png/ReadingDoodle.png"
                    alt="Reading doodle"
                    width={25}
                    height={25}
                    className="drop-shadow-lg"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-1 -right-2"
                  animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Image
                    src="/doodles/open-doodles/png/SelfieDoodle.png"
                    alt="Selfie doodle"
                    width={28}
                    height={28}
                    className="drop-shadow-lg"
                  />
                </motion.div>
              </div>

              <DoodleFrame className="bg-gradient-to-r from-dusty-200 to-gentle-200 rounded-2xl p-6 shadow-xl relative overflow-hidden">
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
                      className="w-40 h-40 mx-auto flex items-center justify-center mb-4 relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >

                      <div 
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(16, 185, 129, 0.3) 50%, transparent 100%)',
                          filter: 'blur(12px)',
                          transform: 'scale(1.3)'
                        }}
                      />

                      <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 p-2">
                        <Image
                          src="/assests/giri.png"
                          alt="Giri - The Handsome Groom"
                          width={120}
                          height={120}
                          className="object-contain w-full h-full"
                          style={{ filter: 'drop-shadow(0 4px 16px rgba(14, 165, 233, 0.4))' }}
                        />
                      </div>

                      <motion.div
                        className="absolute -top-2 -left-2 z-20"
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

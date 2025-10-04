"use client";

import { motion } from "framer-motion";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";
import { DoodleHeart, DoodleFrame } from "@/components/DoodleArt";
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
            <div className="flex items-center justify-center gap-4 mb-8">
              <DoodleHeart className="w-8 h-8 text-pink-400" />
              <StaggeredText
                text="DYNAMIC DUO"
                className="text-5xl md:text-6xl font-handwritten text-navy-800 mb-8 tracking-widest-em uppercase transform -rotate-1"
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
                text="DYNAMIC"
                className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform -rotate-1"
                direction="up"
                once={false}
              />
              <DoodleHeart className="w-6 h-6 text-pink-400" />
            </div>
            <StaggeredText
              text="DUO"
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
            <p className="text-lg md:text-xl text-navy-600 leading-emotional max-w-3xl mx-auto mb-12 font-script">
              Meet the two amazing people who are about to become one. Get to know the couple behind this beautiful celebration.
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Boobana Card */}
          <ScrollReveal direction="left" delay={0.2} once={false}>
            <motion.div
              className="max-w-md mx-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <DoodleFrame className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center text-3xl mb-4">
                      👩‍💼
                    </div>
                    <h3 className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform -rotate-1">
                      BOOBANA
                    </h3>
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
              className="max-w-md mx-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <DoodleFrame className="bg-gradient-to-r from-dusty-200 to-gentle-200 rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-200 to-green-200 flex items-center justify-center text-3xl mb-4">
                      👨‍💼
                    </div>
                    <h3 className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform rotate-1">
                      GIRI
                    </h3>
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

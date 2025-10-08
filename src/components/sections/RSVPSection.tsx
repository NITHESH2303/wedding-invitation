"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

      <FloatingDoodles />

      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-4 right-4"
          animate={{ y: [0, -5, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/doodles/open-doodles/png/DancingDoodle.png"
            alt="Dancing doodle"
            width={35}
            height={35}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-4 left-4"
          animate={{ y: [0, -4, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Image
            src="/doodles/open-doodles/png/GroovyDoodle.png"
            alt="Groovy doodle"
            width={30}
            height={30}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 right-2"
          animate={{ y: [0, -3, 0], rotate: [0, -2, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Image
            src="/doodles/open-doodles/png/IceCreamDoodle.png"
            alt="Ice cream doodle"
            width={28}
            height={28}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-2"
          animate={{ y: [0, -6, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Image
            src="/doodles/open-doodles/png/SelfieDoodle.png"
            alt="Selfie doodle"
            width={32}
            height={32}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        {/* Add more fun doodles from assets - positioned away from content */}
        <motion.div
          className="absolute top-1/4 left-2"
          animate={{ y: [0, -4, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
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
          className="absolute top-1/3 right-2"
          animate={{ y: [0, -3, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >
          <Image
            src="/doodles/open-doodles/png/ReadingDoodle.png"
            alt="Reading doodle"
            width={22}
            height={22}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-2"
          animate={{ y: [0, -4, 0], rotate: [0, -3, 3, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        >
          <Image
            src="/doodles/open-doodles/png/CoffeeDoddle.png"
            alt="Coffee doodle"
            width={26}
            height={26}
            className="drop-shadow-lg"
          />
        </motion.div>
      </div>
      
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
          
          {/* Final Fest Image - Responsive with Cropping */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-44 h-48 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/assests/final_fest.png"
                alt="Final Fest Celebration"
                width={250}
                height={200}
                className="w-full h-full"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 60%',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                  transform: 'scale(1.2)',
                  transformOrigin: 'center'
                }}
              />
            </div>
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
                      <span className="text-navy-700">Heck yes, wouldn't miss it for the world! 🎉</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        className="mr-3 text-mint-500 focus:ring-mint-300"
                        required
                      />
                      <span className="text-navy-700">Showing up with more style than the cake 😏</span>
                    </label>
                  </div>
                </div>
                
                <motion.a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20251122T123000Z%2F20251123T163000Z&details=Oii...%20this%20is%20not%20normal%20kalyanam.%20%0AThis%20is%20THE%20bash.%20%0AFood%20unlimited%2C%20dance%20compulsory%2C%20excuses%20banned.%20%0AMark%20your%20calendar%20or%20face%20lifetime%20404%20error.&location=Namakkal&text=Boobana%20%26%20Giri%20Wedding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-mint-400 to-gentle-400 text-navy-800 py-4 px-8 rounded-full text-base font-handwritten tracking-widest-em transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📅 Add to Calendar
                </motion.a>
              </form>
            </DoodleFrame>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";
import { DoodleStar, DoodleFlower, DoodleFrame } from "@/components/DoodleArt";
import { FloatDoodle, SelfieDoodle, CoffeeDoodle, ReadingDoodle } from "@/components/OpenDoodles";
import { FloatingDoodles } from "@/components/DoodleArt";

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative py-20"
      style={{
        background: `
          linear-gradient(135deg, #f9f6f1 0%, #f3edea 50%, #f7f5f2 100%),
          radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)
        `
      }}
    >

      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-blush-300 to-oat-300" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
      }}></div>

      <FloatingDoodles />
      
      <div className="max-w-4xl mx-auto px-8 py-8">
        <ScrollReveal direction="up" className="text-center mb-8" once={false}>
          <div className="hidden md:block">
            <div className="flex items-center justify-center gap-4 mb-8">
              <DoodleStar className="w-8 h-8 text-yellow-400" />
              <StaggeredText
                text="THE BIG DAYS"
                className="text-5xl md:text-6xl font-handwritten text-navy-800 mb-8 tracking-widest-em uppercase transform -rotate-1"
                direction="up"
                once={false}
              />
              <DoodleStar className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          <div className="block md:hidden text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DoodleStar className="w-6 h-6 text-yellow-400" />
              <StaggeredText
                text="THE BIG"
                className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform -rotate-1"
                direction="up"
                once={false}
              />
              <DoodleStar className="w-6 h-6 text-yellow-400" />
            </div>
            <StaggeredText
              text="DAYS"
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
              Join us for two days of celebration, love, and joy as we begin our forever together.
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            className="max-w-md mx-auto relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FloatDoodle 
              width={60} 
              height={60} 
              className="absolute -top-4 -right-4 -z-10"
              delay={0.5}
            />
            <SelfieDoodle 
              width={40} 
              height={40} 
              className="absolute -bottom-2 -left-2 -z-10"
              delay={0.8}
            />
            <DoodleFrame className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <DoodleStar className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform -rotate-1">
                    THE RECEPTION
                  </h3>
                  <DoodleStar className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="space-y-3 text-sm leading-emotional">
                  <p className="font-bold text-navy-700 text-lg">November 22nd, 2025</p>
                  <p className="text-navy-600">6:00 PM - 11:00 PM</p>
                  <p className="text-navy-600">Namakkal, Tamil Nadu</p>
                  <p className="text-navy-500 text-sm italic">
                    &ldquo;Dinner, dancing, and celebration with family and friends&rdquo;
                  </p>
                </div>
              </div>
            </DoodleFrame>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CoffeeDoodle 
              width={60} 
              height={60} 
              className="absolute -top-4 -left-4 -z-10"
              delay={0.7}
            />
            <ReadingDoodle 
              width={50} 
              height={50} 
              className="absolute -bottom-2 -right-2 -z-10"
              delay={1.0}
            />
            <DoodleFrame className="bg-gradient-to-r from-dusty-200 to-gentle-200 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <DoodleFlower className="w-6 h-6 text-pink-400" />
                  <h3 className="text-2xl md:text-3xl font-doodle text-navy-800 tracking-widest-em uppercase transform rotate-1">
                    THE WEDDING
                  </h3>
                  <DoodleFlower className="w-6 h-6 text-pink-400" />
                </div>
                <div className="space-y-3 text-sm leading-emotional">
                  <p className="font-bold text-navy-700 text-lg">November 23rd, 2025</p>
                  <p className="text-navy-600">4:00 AM - 10:00 AM</p>
                  <p className="text-navy-600">Namakkal, Tamil Nadu</p>
                  <p className="text-navy-500 text-sm italic">
                    &ldquo;The moment we say &lsquo;I do&rsquo; and become one&rdquo;
                  </p>
                </div>
              </div>
            </DoodleFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

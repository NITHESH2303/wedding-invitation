"use client";

import { motion } from "framer-motion";
import StaggeredText from "@/components/StaggeredText";
import { DoodleHeart, DoodleStar, DoodleFlower } from "@/components/DoodleArt";

export default function FooterSection() {
  return (
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
                once={false}
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
            
 
            <motion.div 
              className="mt-6 pt-4 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-white/30 text-xs font-medium mb-6 md:mb-2 font-script italic">
                P.S. Coded with more love than the couple's chat history 💬❤️
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap mt-2">
                <span className="text-white/40 text-xs">Crafted by</span>
                <motion.a
                  href="mailto:nitheshkanna23@gmail.com?subject=🎉 We're ready to hire you!&body=Hi Nithesh,%0D%0A%0D%0AYour wedding website impressed us! 💍✨%0D%0A%0D%0AWe'd love to discuss:%0D%0A• Project: [Your Project Name]%0D%0A• Package: [Insert $$$ here 💰]%0D%0A• Start Date: [ASAP? 🚀]%0D%0A%0D%0ALet's make something awesome together!%0D%0A%0D%0ACheers,%0D%0A[Your Name]"
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white/70 text-xs font-semibold hover:text-pink-300 transition-colors duration-300 border-b border-dashed border-white/20 hover:border-pink-300">
                    Nithesh Kanna
                  </span>
                  {/* Desktop hover tooltip */}
                  <span className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg font-medium">
                    🤫 Hire me!
                  </span>
                  {/* Mobile: Always visible pulsing hint */}
                  <motion.span 
                    className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 text-pink-300 text-xs whitespace-nowrap font-medium"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    👇🏻 Tap me!
                  </motion.span>
                </motion.a>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://github.com/NITHESH2303" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white/80 transition-colors duration-300 group"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nitheshkanna" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white/80 transition-colors duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

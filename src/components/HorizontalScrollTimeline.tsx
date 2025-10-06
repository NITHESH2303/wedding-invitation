"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DoodleHeart, DoodleStar } from "@/components/DoodleArt";

interface StoryCard {
  id: number;
  type: "milestone" | "quote" | "image";
  title?: string;
  date?: string;
  description?: string;
  content?: string;
  author?: string;
  icon?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

interface HorizontalScrollTimelineProps {
  cards: StoryCard[];
  className?: string;
}

export default function HorizontalScrollTimeline({
  cards,
  className = "",
}: HorizontalScrollTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = cards.length;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(totalCards - 1) * 100}%`]
  );

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${totalCards * 100}vh` }}
      role="region"
      aria-label="Our Love Story Timeline"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-8 px-8 md:px-16"
            style={{ x }}
          >
            {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[50vw]"
                  initial={{ opacity: 0.3, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  aria-label={`Story card ${index + 1} of ${totalCards}`}
                >
                  {card.type === "milestone" && (
                    <div className="relative bg-gradient-to-br from-peach-200 via-blush-100 to-mint-100 rounded-3xl p-8 md:p-12 shadow-2xl h-[70vh] flex flex-col justify-center">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="text-6xl md:text-7xl" role="img" aria-label={card.title}>{card.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-3xl md:text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase mb-2">
                            {card.title}
                          </h3>
                          <p className="text-lg md:text-xl text-navy-600 font-medium">
                            {card.date}
                          </p>
                        </div>
                      </div>
                      <p className="text-xl md:text-2xl text-navy-700 leading-emotional font-script">
                        {card.description}
                      </p>
                      <div className="absolute top-6 right-6">
                        <DoodleHeart className="w-8 h-8 text-pink-300 opacity-50" animate={false} />
                      </div>
                    </div>
                  )}

                  {card.type === "quote" && (
                    <div className="bg-gradient-to-br from-mint-100 via-gentle-100 to-peach-100 rounded-3xl p-8 md:p-12 shadow-2xl h-[70vh] flex flex-col justify-center">
                      <div className="flex justify-center mb-6">
                        <DoodleStar className="w-12 h-12 text-yellow-400" animate={false} />
                      </div>
                      <blockquote className="text-2xl md:text-4xl font-script text-navy-700 italic text-center mb-8 leading-emotional">
                        &ldquo;{card.content}&rdquo;
                      </blockquote>
                      <cite className="text-xl md:text-2xl text-navy-600 font-medium text-center">
                        — {card.author}
                      </cite>
                    </div>
                  )}

                  {card.type === "image" && (
                    <div className="bg-gradient-to-br from-blush-100 via-peach-100 to-oat-100 rounded-3xl p-8 md:p-12 shadow-2xl h-[70vh] flex flex-col justify-center items-center">
                      <div className="relative max-w-full max-h-full">
                        <div className="text-6xl md:text-8xl mb-6" role="img" aria-label="Couple">💑</div>
                        <p className="text-xl md:text-2xl text-navy-700 font-script text-center mt-6">
                          {card.caption}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
            ))}
          </motion.div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
          aria-live="polite"
        >
          <div className="relative w-32 h-1 bg-navy-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-mint-300 rounded-full"
              style={{ width: progressBarWidth }}
            />
          </div>
          <span className="text-sm text-navy-600 font-medium">
            Scroll to explore
          </span>
        </div>
      </div>
    </div>
  );
}

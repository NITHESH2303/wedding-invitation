"use client";

import StaggeredText from "@/components/StaggeredText";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import { DoodleHeart, DoodleStar } from "@/components/DoodleArt";
import { FloatingDoodles } from "@/components/DoodleArt";
import MotionPanel from "@/components/MotionPanel";
import Image from "next/image";

// Story scenes/panels data structure
interface StoryScene {
  id: number;
  type: "header" | "quote" | "image" | "milestone";
  title?: string;
  subtitle?: string;
  content?: string;
  author?: string;
  src?: string;
  alt?: string;
  caption?: string;
  date?: string;
  description?: string;
  icon?: string;
  animation: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn" | "parallax";
  delay: number;
}

const storyScenes: StoryScene[] = [
  {
    id: 1,
    type: "header",
    title: "OUR LOVE STORY",
    subtitle: "Every love story is beautiful, but ours is my favorite. From the first hello to forever, we've written our story together, one chapter at a time.",
    animation: "fadeIn",
    delay: 0
  },
  {
    id: 2,
    type: "quote",
    content: "It all started with a simple 'hello' that changed everything.",
    author: "Boobana & Giri",
    animation: "slideUp",
    delay: 0.2
  },
  {
    id: 3,
    type: "image",
    src: "/assets/bride-groom-doodle.png",
    alt: "Our love story illustration",
    caption: "Two hearts, one journey",
    animation: "scaleIn",
    delay: 0.4
  },
  {
    id: 4,
    type: "milestone",
    title: "First Meeting",
    date: "March 2024",
    description: "A chance encounter that felt like destiny. We knew from that moment that something special was beginning.",
    icon: "💕",
    animation: "slideLeft",
    delay: 0.6
  },
  {
    id: 5,
    type: "milestone",
    title: "First Date",
    date: "April 2024",
    description: "Coffee, conversation, and countless laughs. That's when we realized we were meant to be together.",
    icon: "☕",
    animation: "slideRight",
    delay: 0.8
  },
  {
    id: 6,
    type: "milestone",
    title: "The Proposal",
    date: "December 2024",
    description: "Under the stars, with love in our hearts, we said yes to forever.",
    icon: "💍",
    animation: "parallax",
    delay: 1.0
  }
];

export default function LoveStorySection() {
  return (
    <section
      id="story"
      className="relative py-20 min-h-screen"
      style={{
        background: `
          linear-gradient(135deg, #f7f5f2 0%, #f9f6f1 50%, #f3edea 100%),
          radial-gradient(circle at 30% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
        `
      }}
    >
      {/* Cinematic Sectional Transition */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-oat-300 to-blush-300" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
      }}></div>

      <FloatingDoodles />
      
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Story Scenes */}
        {storyScenes.map((scene) => (
          <MotionPanel
            key={scene.id}
            animation={scene.animation as "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn" | "parallax"}
            delay={scene.delay}
            className="mb-16"
            once={false}
          >
            {scene.type === "header" && (
              <div className="text-center">
                {/* Desktop: Single line */}
                <div className="hidden md:block">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <DoodleHeart className="w-8 h-8 text-pink-400" />
                    <StaggeredText
                      text={scene.title || ""}
                      className="text-5xl md:text-6xl font-handwritten text-navy-800 tracking-widest-em uppercase transform -rotate-1"
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
                      text="OUR LOVE"
                      className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform -rotate-1"
                      direction="up"
                      once={false}
                    />
                    <DoodleHeart className="w-6 h-6 text-pink-400" />
                  </div>
                  <StaggeredText
                    text="STORY"
                    className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase block transform rotate-1"
                    direction="up"
                    once={false}
                  />
                </div>
                
                <p className="text-lg md:text-xl text-navy-600 leading-emotional max-w-4xl mx-auto font-script">
                  {scene.subtitle}
                </p>
              </div>
            )}

            {scene.type === "quote" && (
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-r from-peach-200 to-blush-100 rounded-2xl p-8 shadow-xl">
                  <blockquote className="text-2xl md:text-3xl font-script text-navy-700 italic mb-4">
                    &ldquo;{scene.content}&rdquo;
                  </blockquote>
                  <cite className="text-lg text-navy-600 font-medium">
                    — {scene.author}
                  </cite>
                </div>
              </div>
            )}

            {scene.type === "image" && (
              <div className="text-center">
                <div className="relative max-w-2xl mx-auto">
                  <Image
                    src={scene.src || ""}
                    alt={scene.alt || ""}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                    <p className="text-navy-700 font-medium">{scene.caption}</p>
                  </div>
                </div>
              </div>
            )}

            {scene.type === "milestone" && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-mint-100 to-gentle-100 rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{scene.icon}</div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-handwritten text-navy-800 tracking-widest-em uppercase">
                        {scene.title}
                      </h3>
                      <p className="text-navy-600 font-medium">{scene.date}</p>
                    </div>
                  </div>
                  <p className="text-lg text-navy-700 leading-emotional font-script">
                    {scene.description}
                  </p>
                </div>
              </div>
            )}
          </MotionPanel>
        ))}

        {/* Timeline Section */}
        <MotionPanel animation="fadeIn" delay={1.2} className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <DoodleStar className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase">
                OUR JOURNEY
              </h2>
              <DoodleStar className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-lg text-navy-600 font-script">
              Every moment that led us here
            </p>
          </div>
          <AnimatedTimeline />
        </MotionPanel>
      </div>
    </section>
  );
}

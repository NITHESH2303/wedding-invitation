"use client";

import StaggeredText from "@/components/StaggeredText";
import HorizontalScrollTimeline from "@/components/HorizontalScrollTimeline";
import { DoodleHeart } from "@/components/DoodleArt";
import { FloatingDoodles } from "@/components/DoodleArt";
import MotionPanel from "@/components/MotionPanel";

interface TimelineCard {
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

const timelineCards: TimelineCard[] = [
  {
    id: 1,
    type: "quote",
    content: "It all started with a simple 'hello' that changed everything.",
    author: "Boobana & Giri"
  },
  {
    id: 2,
    type: "milestone",
    title: "First Meeting",
    date: "March 2024",
    description: "A chance encounter that felt like destiny. We knew from that moment that something special was beginning.",
    icon: "💕"
  },
  {
    id: 3,
    type: "milestone",
    title: "First Date",
    date: "April 2024",
    description: "Coffee, conversation, and countless laughs. That's when we realized we were meant to be together.",
    icon: "☕"
  },
  {
    id: 4,
    type: "image",
    caption: "Two hearts, one journey"
  },
  {
    id: 5,
    type: "milestone",
    title: "The Proposal",
    date: "December 2024",
    description: "Under the stars, with love in our hearts, we said yes to forever.",
    icon: "💍"
  },
  {
    id: 6,
    type: "milestone",
    title: "Forever Begins",
    date: "2025",
    description: "Now we're here, ready to celebrate our love with all the people who matter most to us. This is just the beginning of our forever together.",
    icon: "🎉"
  }
];

export default function LoveStorySection() {
  return (
    <section
      id="story"
      className="relative"
      style={{
        background: `
          linear-gradient(135deg, #f7f5f2 0%, #f9f6f1 50%, #f3edea 100%),
          radial-gradient(circle at 30% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
        `
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-oat-300 to-blush-300" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
      }}></div>

      <FloatingDoodles />

      <div className="relative py-20">
        <MotionPanel animation="fadeIn" delay={0} className="text-center mb-16 px-8">
          <div className="hidden md:block">
            <div className="flex items-center justify-center gap-4 mb-8">
              <DoodleHeart className="w-8 h-8 text-pink-400" />
              <StaggeredText
                text="OUR LOVE STORY"
                className="text-5xl md:text-6xl font-handwritten text-navy-800 tracking-widest-em uppercase transform -rotate-1"
                direction="up"
                once={false}
              />
              <DoodleHeart className="w-8 h-8 text-pink-400" />
            </div>
          </div>

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
            Every love story is beautiful, but ours is my favorite. From the first hello to forever, we&apos;ve written our story together, one chapter at a time.
          </p>
        </MotionPanel>
      </div>

      <HorizontalScrollTimeline cards={timelineCards} />
    </section>
  );
}

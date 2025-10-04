"use client";

import { useState } from "react";
import Timer from "@/components/countdown";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 Add state for the menu

  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">B & G</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-red-600">
              Home
            </a>
            <a href="#story" className="text-gray-600 hover:text-red-600">
              Our Story
            </a>
            <a href="#events" className="text-gray-600 hover:text-red-600">
              Events
            </a>
            <a href="#family" className="text-gray-600 hover:text-red-600">
              Family
            </a>
            <a href="#rsvp" className="text-gray-600 hover:text-red-600">
              RSVP
            </a>
          </nav>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-600 text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // 👈 Add onClick to toggle state
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
          <nav className="flex flex-col items-center space-y-8">
            <a
              href="#home"
              className="text-2xl text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#story"
              className="text-2xl text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a
              href="#events"
              className="text-2xl text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            <a
              href="#family"
              className="text-2xl text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Family
            </a>
            <a
              href="#rsvp"
              className="text-2xl text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              RSVP
            </a>
          </nav>
        </div>
      )}

      {/* Rest of your page content... */}
      <section
        id="home"
        className="flex items-center min-h-screen justify-center text-center bg-gradient-to-br from-red-50 to-orange-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-gray-600 mb-8">
            Two hearts unite, a beautiful story begins
          </p>
          <h1 className="py-8 text-6xl md:text-8xl font-bold text-gray-900 mb-6">
            <span className="block">Boobana</span>
            <span className="text-4xl text-red-500 block my-4 mx-auto">💕</span>
            <span className="block">Giri</span>
          </h1>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 max-w-md mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🎉 Wedding Celebration
            </h2>
            <div className="space-y-2 text-lg">
              <p className="font-semibold">November 22nd & 23rd, 2025</p>
              <p className="text-gray-600">Namakkal, Tamil Nadu</p>
              <p className="text-red-600 font-medium">
                Let&apos;s party together! 🎊
              </p>
            </div>
          </div>
          <div className="mb-8">
            <Timer />
          </div>
          <a
            href="#story"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-xl font-semibold transition-colors"
          >
            View Our Story ❤️
          </a>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Our Love Story 💕
          </h2>
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <p>
                It all began the traditional way — with a photo shared in the
                family. Everyone was convinced it was a perfect match… except
                Boobana. She wanted to meet him first.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                📿 The Temple Meet
              </h3>
              <p>
                The first meeting happened at a temple, surrounded by family. It
                was quiet — too quiet. Giri kept it polite, asking a few basic
                questions, and everyone left wondering if he was always this
                calm.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                🚉 The Bangalore Twist
              </h3>
              <p>
                Not satisfied, Boobana decided to meet him again — this time in
                Bangalore, just the two of them. That’s when the real Giri
                showed up: talkative, funny, and full of energy. Turns out, both
                of them shared the same vibe. Green signal: officially on.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                👕 The Blue Shirt Saga
              </h3>
              <p>
                Here’s the running family joke — every single time Giri showed
                up (temple, Bangalore, or home visit), he wore a blue shirt. At
                one point, everyone started to wonder if he even owned another
                color.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                😂 The Gas Station Fail
              </h3>
              <p>
                One fine day, Boobana and her brother decided to pull off a
                “secret mission” — a surprise visit to Giri’s house, without
                either family knowing. Everything was going smoothly until, of
                course, they got caught. To make it even funnier, Giri wasn’t
                home — he’d just stepped out to the gas station. The next day,
                one of Giri’s relatives casually asked if Boobana had dropped
                by… mission failed, laughter guaranteed.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                🚗 The Adventures Begin
              </h3>
              <p>
                From there, it was countless Bangalore trips, endless
                conversations, and laughter that never ran out. Somewhere
                between traffic jams and filter coffee, the “arranged” quietly
                turned into “their story.”
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                💍 The Rest Is History
              </h3>
              <p>
                Families met, rings were exchanged, shopping marathons survived
                — and now it’s time for the grand celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Two Days of Epic Fun! 🎪
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Mark your calendars - it&apos;s going to be legendary!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Reception Day */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-red-600">
                  🕺 Wedding Reception
                </h3>
                <span className="text-4xl">🎉</span>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-lg">November 22nd, 2025</p>
                  <p className="text-gray-600">6:00 PM - 10:00 PM</p>
                  <p className="text-gray-600">Aishwarya Mahal, Namakkal</p>
                </div>
                <div className="border-l-4 border-red-200 pl-4">
                  <p className="font-medium text-red-600">What to expect:</p>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>Unlimited South Indian feast</li>
                    <li>DJ + Live music</li>
                    <li>Surprise sweet moments</li>
                    <li>Catch-ups, chaos, and cousins</li>
                  </ul>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-700 font-medium">
                  ⚡ Dress Code: Party ready! Come to dance, eat, laugh, and
                  celebrate. 💃
                </p>
              </div>
            </div>
            {/* Wedding Day */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-orange-600">
                  💒 The Main Event
                </h3>
                <span className="text-4xl">👰‍♀️🤵‍♂️</span>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-lg">November 23rd, 2025</p>
                  <p className="text-gray-600">4:30 AM - 10:00 AM</p>
                  <p className="text-gray-600">Aishwarya Mahal, Namakkal</p>
                </div>
                <div className="border-l-4 border-orange-200 pl-4">
                  <p className="font-medium text-orange-600">What to expect:</p>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>Sunrise fire ritual & blessing</li>
                    <li>Flower shower & garland draping</li>
                    <li>Candid family selfies</li>
                    <li>Happy tears and lifelong memories</li>
                  </ul>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-700 font-medium">
                  🌅 Early bird club! Traditional attire encouraged—bright
                  sarees & crisp dhotis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Couple Section */}
      <section id="couple" className="py-24 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Dynamic Duo 💫
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bride */}
            <div className="text-center">
              <div className="w-40 h-40 bg-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">👰‍♀️</span>
              </div>
              <h3 className="text-2xl font-bold text-pink-600 mb-2">Boobana</h3>
              <div className="bg-pink-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  The sunshine of the story — the one who plans everything,
                  forgets where she kept it, then laughs her way through it
                  anyway. Loves coffee, chaos, and making sure everyone’s fed.
                </p>
              </div>
            </div>
            {/* Groom */}
            <div className="text-center">
              <div className="w-40 h-40 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">🤵‍♂️</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">Giri</h3>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  The calm in the storm — a problem solver, a dream chaser, and
                  occasionally the reason Wi-Fi stops working. Big ideas, bigger
                  heart, and a secret talent for pretending he’s not emotional.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Together, they&apos;re the perfect blend of calm and chaos,
              laughter and love — proof that soulmates don’t just exist in
              movies. They’re living theirs.
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section
        id="rsvp"
        className="py-20 bg-gradient-to-br from-red-50 to-orange-50"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Epic Celebration! 🎊
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t ghost us—RSVP so we know how much sambar to make!
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Which events will you attend? 🎉
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 h-4 w-4 text-red-600"
                    />
                    <span>🕺 Reception Party - Nov 22nd</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 h-4 w-4 text-red-600"
                    />
                    <span>💒 Wedding Ceremony - Nov 23rd</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Food Preferences 🍛
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
                  <option>South Indian Vegetarian</option>
                  <option>Jain Vegetarian (No onion/garlic)</option>
                  <option>I&apos;ll eat anything delicious! 😋</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How many people total? (Including you)
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
                  <option>Just me! 🙋‍♀️</option>
                  <option>2 people (Me + 1)</option>
                  <option>3 people (Me + 2)</option>
                  <option>4 people (Me + 3)</option>
                  <option>5+ people (I&apos;ll contact you!)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special message or requirements? 💬
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 h-24"
                  placeholder="Any special needs, song requests, or just say hi! 😊"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                Count Me In! 🎉
              </button>
            </form>
          </div>
          <div className="text-center mt-8 text-gray-600">
            <p className="mb-2">
              <strong>Questions?</strong> WhatsApp us! 📱
            </p>
            <p>Boobana: +91 98765 43210 | Giri: +91 98765 43211</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Boobana & Giri</h3>
          <p className="text-gray-400 mb-6">
            November 22nd & 23rd, 2025 • Namakkal, Tamil Nadu
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              Made with ❤️ for our special day | See you on the dance floor!
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
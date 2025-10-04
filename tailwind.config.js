/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic Emotional Color Palette - Exact Values
        peach: {
          50: "#fefcfb",
          100: "#fdf7f3",
          200: "#f9ede4",
          300: "#f7f5f2", // Exact peach-grey from prompt
          400: "#f0d4c0",
          500: "#e8c4a8",
          600: "#d4a574",
          700: "#b8935f",
          800: "#9c7a4a",
          900: "#7d5f3a",
        },
        oat: {
          50: "#fefdfb",
          100: "#fdfaf5",
          200: "#f9f3e8",
          300: "#f9f6f1", // Exact oat from prompt
          400: "#f0e2c8",
          500: "#e8d4b0",
          600: "#d4b880",
          700: "#b89d66",
          800: "#9c8252",
          900: "#7d6641",
        },
        blush: {
          50: "#fefcfb",
          100: "#fdf7f3",
          200: "#f9ede4",
          300: "#f3edea", // Exact blush from prompt
          400: "#ede0d6",
          500: "#e6d1c2",
          600: "#d4b8a0",
          700: "#b89d7f",
          800: "#9c8266",
          900: "#7d6652",
        },
        mint: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac", // Gentle mint accent
          400: "#4ade80",
          500: "#22c55e",
        },
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc", // Gentle sky blue accent
          400: "#38bdf8",
          500: "#0ea5e9",
        },
        dusty: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe", // Dusty purple accent
          400: "#c084fc",
          500: "#a855f7",
        },
        gentle: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d", // Gentle yellow accent
          400: "#fbbf24",
          500: "#f59e0b",
        },
        navy: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b", // Deep navy for headers
          900: "#0f172a",
        },
        // Color Tokens - Enforced Roles
        love: {
          bg: "#f3edea", // blush-300 for love/couple/story
          accent: "#f9ede4", // blush-200
          text: "#9c8266", // blush-800
        },
        action: {
          bg: "#86efac", // mint-300 for RSVP/action
          accent: "#bbf7d0", // mint-200
          text: "#166534", // mint-800
        },
        celebration: {
          bg: "#fcd34d", // gentle-300 for celebration
          accent: "#fde68a", // gentle-200
          text: "#92400e", // gentle-800
        },
        info: {
          bg: "#f0f9ff", // sky-50 for info only
          accent: "#bae6fd", // sky-200
          text: "#0c4a6e", // sky-800
        },
        cinematic: {
          "deep-red": "#8B0000",
          "temple-gold": "#FFD700",
          saffron: "#FF8C00",
          maroon: "#800000",
          vermillion: "#FF4500",
          "lotus-pink": "#FFB6C1",
          "silk-white": "#F8F8FF",
          charcoal: "#2C2C2C",
          cream: "#FFFDD0",
        },
      },
      backgroundImage: {
        "pastel-gradient":
          "linear-gradient(135deg, #e0e8ff 0%, #f7f9fc 50%, #fdf6ee 100%)",
      },
      fontSize: {
        "hero-xl": ["4rem", { lineHeight: "1", fontWeight: "700" }],
        "hero-lg": ["3rem", { lineHeight: "1.1", fontWeight: "600" }],
        "hero-md": ["2rem", { lineHeight: "1.2", fontWeight: "500" }],
        story: ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      letterSpacing: {
        "widest-em": "0.18em", // Exact value from prompt
        "wide-em": "0.12em", // Exact value from prompt
      },
      lineHeight: {
        emotional: "1.8", // 1.7-1.9 range from prompt
        warm: "1.7", // 1.7-1.9 range from prompt
      },
      fontFamily: {
        cinematic: ["Playfair Display", "serif"],
        story: ["Crimson Text", "serif"],
        tamil: ["Mukti", "Noto Sans Tamil", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "skeleton-pulse": "skeletonPulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        tick: "tick 0.5s ease-out",
        "countdown-pulse": "countdownPulse 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 215, 0, 0.7)" },
          "50%": { boxShadow: "0 0 0 10px rgba(255, 215, 0, 0)" },
        },
        tick: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        countdownPulse: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.4)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 0 8px rgba(239, 68, 68, 0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        skeletonPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

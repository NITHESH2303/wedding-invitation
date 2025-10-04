/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
      fontSize: {
        "hero-xl": ["4rem", { lineHeight: "1", fontWeight: "700" }],
        "hero-lg": ["3rem", { lineHeight: "1.1", fontWeight: "600" }],
        "hero-md": ["2rem", { lineHeight: "1.2", fontWeight: "500" }],
        story: ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      fontFamily: {
        cinematic: ["Playfair Display", "serif"],
        story: ["Crimson Text", "serif"],
        tamil: ["Mukti", "Noto Sans Tamil", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 1s ease-out",
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
      },
    },
  },
  plugins: [],
};

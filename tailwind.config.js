/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cinematic': {
          'deep-red': '#8B0000',
          'temple-gold': '#FFD700', 
          'saffron': '#FF8C00',
          'maroon': '#800000',
          'vermillion': '#FF4500',
          'lotus-pink': '#FFB6C1',
          'silk-white': '#F8F8FF',
          'charcoal': '#2C2C2C',
          'cream': '#FFFDD0',
        },
      },
      fontSize: {
        'hero-xl': ['4rem', { lineHeight: '1', fontWeight: '700' }],
        'hero-lg': ['3rem', { lineHeight: '1.1', fontWeight: '600' }],
        'hero-md': ['2rem', { lineHeight: '1.2', fontWeight: '500' }],
        'story': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      fontFamily: {
        'cinematic': ['Playfair Display', 'serif'],
        'story': ['Crimson Text', 'serif'],
        'tamil': ['Mukti', 'Noto Sans Tamil', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

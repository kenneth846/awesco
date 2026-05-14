/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1F2937',
          900: '#1F2937',  // primary dark — replaces all pure black
          800: '#273344',  // slightly lighter dark panels
          700: '#2E3D50',  // hover states, card backgrounds
          600: '#374151',  // borders, dividers
          500: '#4B5563',  // muted text, placeholders
        },
        hi: {
          DEFAULT: '#39FF14',
          400: '#5BFF3A',
          500: '#39FF14',
          600: '#2DD60E',
          700: '#22A50A',
        },
        bone: {
          DEFAULT: '#F5F5F2',
          100: '#FAFAF7',
          200: '#F5F5F2',
          300: '#E8E8E3',
          400: '#C9C9C2',
        },
        emergency: '#FF3B30',
      },
      fontFamily: {
        // These CSS variables are injected by next/font into <html class="...">
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)',    'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wider2: '0.18em',
      },
      boxShadow: {
        'hi-glow':  '0 0 0 1px #39FF14, 0 0 24px rgba(57,255,20,0.35)',
        'hard':     '6px 6px 0 0 rgba(0,0,0,1)',
        'hard-hi':  '6px 6px 0 0 #39FF14',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '1' },
          '47%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        riseIn: {
          '0%':   { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        shake: {
          '10%, 90%': { transform: 'translateX(-2px)' },
          '20%, 80%': { transform: 'translateX(4px)' },
          '30%, 50%, 70%': { transform: 'translateX(-6px)' },
          '40%, 60%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        flicker: 'flicker 6s ease-in-out infinite',
        riseIn:  'riseIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        shake:   'shake 0.4s cubic-bezier(.36,.07,.19,.97) both',
      },
    },
  },
  plugins: [],
};

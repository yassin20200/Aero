/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#141e33',
          900: '#0f172a',
        },
        mint: {
          400: '#6ee7b7',
          500: '#34d399',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'breathe': 'breathe 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.5)', opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
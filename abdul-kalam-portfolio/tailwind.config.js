/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#080c14",
          card: "rgba(15, 23, 42, 0.75)",
          cardHover: "rgba(30, 41, 59, 0.85)",
          border: "rgba(56, 189, 248, 0.15)",
          borderGlow: "rgba(56, 189, 248, 0.4)",
          accent: "#00f0ff",
          blue: "#3b82f6",
          green: "#10b981",
          text: "#f8fafc",
          muted: "#94a3b8",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s infinite ease-in-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

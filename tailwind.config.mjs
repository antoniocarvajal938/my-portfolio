// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Define tu paleta principal
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',  // orange-300
          400: '#fb923c',
          500: '#f97316',  // orange-500 (principal)
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        secondary: {
          300: '#fdba74',  // Tono secundario
          200: '#fed7aa',
        },
        dark: {
          DEFAULT: '#000000',
          800: '#1a1a1a',
          900: '#0a0a0a',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        gradient: 'gradient 20s linear infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        'fadeInUp-delay-100': 'fadeInUp 0.8s ease-out 0.1s forwards',
      },
    },
  },
  plugins: [],
};
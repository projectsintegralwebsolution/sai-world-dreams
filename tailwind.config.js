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
        brand: {
          blue: {
            DEFAULT: '#0B1B3D',
            deep: '#060E1F',
            dark: '#07132B',
            light: '#162E5F',
            soft: '#203E7A',
          },
          burgundy: {
            DEFAULT: '#4A1227',
            dark: '#360C1C',
            light: '#631B36',
            soft: '#7D2647',
          },
          gold: {
            DEFAULT: '#C5A059',
            light: '#DFBF7D',
            dark: '#9F7E3B',
            accent: '#F3E5C8',
            shimmer: '#E8D39E',
          },
          ivory: {
            DEFAULT: '#FDFBF7',
            light: '#FFFFFF',
            dark: '#F4EFE6',
            card: '#FAF7F2',
            border: '#E8E1D5',
          },
          charcoal: {
            DEFAULT: '#1F2937',
            dark: '#111827',
            light: '#374151',
            muted: '#6B7280',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'luxury': 'none',
        'luxury-gold': 'none',
        'luxury-hover': 'none',
      },
    },
  },
  plugins: [],
};

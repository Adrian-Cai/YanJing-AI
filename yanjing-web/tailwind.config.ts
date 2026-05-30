import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-sc)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#dbe5ff',
          200: '#bcd0ff',
          300: '#8eb1ff',
          400: '#5985ff',
          500: '#3366ff',
          600: '#1a4df5',
          700: '#133ae1',
          800: '#1630b6',
          900: '#182d8f',
          950: '#141d57',
        },
        surface: {
          DEFAULT: '#ffffff',
          secondary: '#f8fafc',
          muted: '#f1f5f9',
        },
        accent: {
          DEFAULT: '#3366ff',
          light: '#5985ff',
          dark: '#1a4df5',
        },
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
        'card-xl': '24px',
        'button': '12px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.04)',
        'elevated': '0 8px 32px rgba(0,0,0,0.08)',
        'glow': '0 0 24px rgba(51,102,255,0.15)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    }
  },
  plugins: []
};

export default config;

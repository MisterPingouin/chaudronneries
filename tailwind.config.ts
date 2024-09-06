import type { Config } from "tailwindcss";
import Link from "next/link";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#75FB4D', 
        white: '#FFFFFF',
        black: '#101010',
        background: {
          black: '#0B1214', // 65% background
          white: '#FFFFFF25', // 25% background
        },
      },
      fontFamily: {
        workSans: ['var(--font-workSans)', 'sans-serif'],
      },
      fontSize: {
        hero: ['36px', { lineHeight: '130%', letterSpacing: '0.01em' }], // Hero text
        heading: ['25px', { lineHeight: '130%', letterSpacing: '0.01em' }], // Heading 01
        body: ['18px', { lineHeight: '130%', letterSpacing: '0.01em' }], // Body
        link: ['16px', { lineHeight: '130%', letterSpacing: '0.01em' }], // Link
        label: ['14px', { lineHeight: '130%', letterSpacing: '0.01em' }], // Label et Link
      },
    },
  },
  plugins: [],
};
export default config;

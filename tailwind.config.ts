import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f7f4',
          100: '#dceee4',
          200: '#b8dcc9',
          300: '#86c2a3',
          400: '#4fa078',
          500: '#2d7a52',
          600: '#1a5c3a',
          700: '#144a2f',
          800: '#0f3a25',
          900: '#0a2819',
        },
      },
    },
  },
  plugins: [],
};
export default config;


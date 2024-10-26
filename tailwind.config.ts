import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "3.5rem",
      },
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT:"#ff642f",
          100: "#ffd7c9",
          200: '#e3f1ff',
        },
        secondary:{
          DEFAULT:'#000000',
          100: '#7f7f7f',
          200: '#e8e8e8',
          300: '#f9f9f9',
        },
      },
    },
  },
  plugins: [],
};
export default config;

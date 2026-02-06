import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#f5f3ff",
          100: "#e9e4ff",
          200: "#d1c7ff",
          300: "#b1a0ff",
          400: "#957dff",
          500: "#7a5af8",
          600: "#5f39db",
          700: "#4824ac",
          800: "#331b7c",
          900: "#221054"
        }
      }
    }
  },
  plugins: []
};

export default config;

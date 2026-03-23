import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Groupe Adequat UK brand
        primary: {
          DEFAULT: "#066aab",
          foreground: "#ffffff",
          50: "#e6f2fa",
          100: "#c0ddf2",
          600: "#055a91",
          700: "#044a77",
          800: "#033a5e",
          900: "#022a44",
        },
        dark: {
          DEFAULT: "#1a2d4a",
          900: "#111e30",
        },
        accent: {
          DEFAULT: "#f0f4f8",
          foreground: "#1a2d4a",
        },
        // Solutions Driven sub-brand
        sd: {
          dark: "#14181F",
          green: "#00A36D",
          "green-light": "#00c982",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

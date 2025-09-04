import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    light: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff",
        },
        secondary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e", // colors.png vibrant green
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          DEFAULT: "#22c55e",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        foreground: "#1f1f23",
      },
    },
    dark: {
      colors: {
        primary: {
          50: "#0c4a6e",
          100: "#075985",
          200: "#0369a1",
          300: "#0284c7",
          400: "#0ea5e9",
          500: "#38bdf8",
          600: "#7dd3fc",
          700: "#bae6fd",
          800: "#e0f2fe",
          900: "#f0f9ff",
          DEFAULT: "#38bdf8",
          foreground: "#1f1f23",
        },
        secondary: {
          50: "#14532d",
          100: "#166534",
          200: "#15803d",
          300: "#16a34a",
          400: "#22c55e",
          500: "#4ade80",
          600: "#86efac",
          700: "#bbf7d0",
          800: "#dcfce7",
          900: "#f0fdf4",
          DEFAULT: "#4ade80",
          foreground: "#1f1f23",
        },
        background: "#1f1f23",
        foreground: "#ffffff",
      },
    },
  },
});

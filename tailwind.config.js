/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7f1",
          100: "#d7ecdd",
          200: "#b0d9bd",
          300: "#82c09a",
          400: "#4fa574",
          500: "#2b8a58",
          600: "#1a7448",
          700: "#0f633d",
          800: "#0A5C36",
          900: "#084a2c",
          950: "#05301d",
        },
        leaf: {
          DEFAULT: "#63A94B",
          50: "#f2f8ee",
          100: "#e2f0da",
          200: "#c5e2b7",
          300: "#a2d08d",
          400: "#63A94B",
          500: "#4d9138",
          600: "#3c722c",
          700: "#305a25",
        },
        gold: {
          DEFAULT: "#F4C542",
          light: "#FBE7A1",
          soft: "#FFF6D6",
          dark: "#D9A91B",
        },
        cream: "#F6F8F5",
        ink: "#202820",
      },
      fontFamily: {
        display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(10, 92, 54, 0.22)",
        card: "0 12px 36px -18px rgba(10, 92, 54, 0.28)",
        gold: "0 14px 34px -16px rgba(244, 197, 66, 0.65)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.55" },
          "70%": { transform: "scale(1.55)", opacity: "0" },
          "100%": { transform: "scale(1.55)", opacity: "0" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1.2deg)" },
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "100%": { transform: "translate3d(14px, -18px, 0) scale(1.06)" },
        },
        "page-in": {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.995)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "menu-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        "pulse-ring": "pulse-ring 2.6s ease-out infinite",
        "float-soft": "float-soft 4s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite alternate",
        "page-in": "page-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
        "menu-in": "menu-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

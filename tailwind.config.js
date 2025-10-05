/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#33A1E0",
        disabled: "#DDDDDD",
        normal: "#151515",
        error: "#E43636",
        dark: "#1E201E",
      },
      backgroundImage: {
        primary: "linear-gradient(145deg, #000000, #2e003e, #a855f7)",
      },
      borderRadius: {
        input: "8px",
      },
      minHeight: {
        screen: "100dvh",
      },
      fontSize: {
        label: "16px",
      },
      width: {},
      height: {
        input: "44px",
      },
      padding: {
        input: "0px 8px",
      },
      keyframes: {},
      animation: {},
      backgroundSize: {},
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};


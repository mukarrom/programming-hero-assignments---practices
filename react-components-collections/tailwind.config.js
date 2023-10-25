/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#7e4fb5",
          secondary: "#afffcf",
          accent: "#7e7adb",
          neutral: "#1F1826",
          "base-100": "#F4F4F6",
          "base-101": "#fff",
          "base-text": "#000000",
          info: "#39CBEF",
          success: "#166055",
          warning: "#C4690E",
          error: "#FA142F",
        },
        dark: {
          primary: "#7c9ef9",
          secondary: "#15a597",
          accent: "#2a3896",
          neutral: "#243642",
          "base-100": "#37363A",
          "base-101": "#EFEFEF",
          "base-text": "#1f2937",
          info: "#1E4DE6",
          success: "#5BECDB",
          warning: "#FBB360",
          error: "#EA7197",
        },
      },
    ],
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],
};

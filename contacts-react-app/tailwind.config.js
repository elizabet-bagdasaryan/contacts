/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "custom-blue": "rgb(11, 44, 91)",
      "white-bck": " rgba(255, 255, 255, 0.823);",
      white: "#fff",
      gray: "#696968",
      "hover-blue": "rgba(11, 44, 91, 0.915)",
      red: "rgba(255,0,0)",
    },
  },
  plugins: [],
};

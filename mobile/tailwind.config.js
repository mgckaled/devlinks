/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{ts,tsx}", "./App.tsx"],
  theme: {
    extend: {
      fontFamily: {
        regular: "Inter_400Regular",
        medium: "Inter_500Medium",
      },
      colors: {
        "stroke-color": "rgb(255 255 255 / 50%)",
        "surface-color": "rgb(255 255 255 / 5%)",
        "surface-color-hover": "rgb(0 0 0 / 2%)",
        "highlight-color": "rgb(255 255 255 / 20%)",
      },
    },
  },
  plugins: [],
}

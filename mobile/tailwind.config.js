/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{ts,tsx}", "./App.tsx"],
  theme: {
    extend: {
      fontFamily: {
        regular: "Inter_400Regular",
        medium: "Inter_500Medium",
      },
    },
  },
  plugins: [],
}

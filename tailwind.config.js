module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        1: "#05386b",
        2: "#379683",
        3: "#5cdb95",
        4: "#8ee4af",
        5: "#edf5e1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],

  mode: "jit",
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "auth-primary": "#4361ee",
        "auth-secondary": "#060818",
        "app-primary": "#1937ca",
        "app-light-gray": "#fafafa",
        "app-secondary": "#1abc9c",
        "app-dark": "#3b3f5c",
        "active-navlink": "#515365",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      boxShadow: {
        primaryButton: "0 10px 20px -10px #4361ee",
        secondaryButton: "0 10px 20px -10px #1abc9c",
        darkButton: "0 10px 20px -10px #3b3f5c",
        allSide: "0px 1px 6px 1px rgb(0 0 0 / 11%)",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

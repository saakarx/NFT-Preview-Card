const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cyan: "hsl(178, 100%, 50%)",
        blue: {
          soft: "hsl(215, 51%, 70%)",
          main: "hsl(217, 54%, 11%)",
          card: "hsl(216, 50%, 16%)",
          line: "hsl(215, 32%, 27%)",
        },
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};

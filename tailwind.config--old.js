module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme("colors.blue.600"),
          },
          img: {
            display: "inline-block",
          },
          hr: {
            borderColor: theme("colors.gray.400"),
            marginTop: "2em",
            marginBottom: "2em",
          },
        },
      },
    }),
    extend: {
      colors: {
        "blog-black": "#333333",
        "blog-red": "#b9301c",
        "meetup-blue": "#00455D",
        "gray-750": "#3f495a",
        "gray-850": "#222733",
        "gray-cseven": "#c7c7c7",
        "gray-999": "#999999",
        "gray-900-spotify": "#121212",
        "gray-800-spotify": "#181818",
        "gray-700-spotify": "#282828",
      },
      spacing: {
        14: "3.5rem",
        22: "5.5rem",
        72: "18rem",
        200: "50rem",
      },
      width: {
        "7/10": "70%",
        "3/10": "30%",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
      },
      backgroundImage: (theme) => ({
        "rand-front-cover": "url('https://picsum.photos/1920/1080')",
      }),
    },
    container: {
      padding: "1rem",
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      "source-sans-pro": [
        "Source Sans Pro",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
};

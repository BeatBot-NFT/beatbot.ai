import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: "#151515",
      white: "#ffffff",
      gray300: "#EDEDED",
      gray400: "#A1A1A1",
      gray500: "#444444",
      gray600: "#2F303A",
    },
    fonts: {
      header: `"Rotundo", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      body: `"Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    },
  },
  media: {
    bp1: "(min-width: 414px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  utils: {
    visuallyHidden: () => ({
      position: "absolute",
      left: "-10000px",
      top: "auto",
      width: "1px",
      height: "1px",
      overflow: "hidden",
    }),
  },
});

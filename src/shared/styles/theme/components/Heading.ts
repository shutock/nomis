export const Heading = {
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
  },
  sizes: {
    "4xl": {
      fontSize: ["6xl", null, "7xl"],
      lineHeight: 1,
    },
    "3xl": {
      fontSize: ["5xl", null, "6xl"],
      lineHeight: 1,
    },
    "2xl": {
      fontSize: ["4xl", null, "5xl"],
      lineHeight: [1.2, null, 1],
    },
    xl: {
      fontSize: ["3xl", null, "4xl"],
      lineHeight: [1.33, null, 1.2],
    },
    lg: {
      fontSize: ["2xl", null, "3xl"],
      lineHeight: [1.33, null, 1.2],
    },
    md: {
      fontSize: "xl",
      lineHeight: 1.2,
    },
    sm: {
      fontSize: "md",
      lineHeight: 1.2,
    },
    xs: {
      fontSize: "sm",
      lineHeight: 1.2,
    },
  },
  defaultProps: {
    size: "xl",
  },
};

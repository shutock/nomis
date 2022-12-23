export const Spinner = {
  baseStyle: {
    width: ["var(--spinner-size)"],
    height: ["var(--spinner-size)"],
  },
  sizes: {
    xs: {
      "--spinner-size": "sizes.3",
    },
    sm: {
      "--spinner-size": "sizes.4",
    },
    md: {
      "--spinner-size": "sizes.6",
    },
    lg: {
      "--spinner-size": "sizes.8",
    },
    xl: {
      "--spinner-size": "sizes.12",
    },
  },
  defaultProps: {
    size: "md",
  },
};

export const Switch = {
  parts: ["container", "track", "thumb"],
  sizes: {
    sm: {
      container: {
        "--switch-track-width": "1.375rem",
        "--switch-track-height": "sizes.3",
      },
    },
    md: {
      container: {
        "--switch-track-width": "1.875rem",
        "--switch-track-height": "sizes.4",
      },
    },
    lg: {
      container: {
        "--switch-track-width": "2.875rem",
        "--switch-track-height": "sizes.6",
      },
    },
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
};

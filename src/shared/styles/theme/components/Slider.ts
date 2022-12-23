export const Slider = {
  parts: ["container", "track", "thumb", "filledTrack", "mark"],
  sizes: {
    lg: {
      container: {
        "--slider-thumb-size": "sizes.4",
        "--slider-track-size": "sizes.1",
      },
    },
    md: {
      container: {
        "--slider-thumb-size": "sizes.3.5",
        "--slider-track-size": "sizes.1",
      },
    },
    sm: {
      container: {
        "--slider-thumb-size": "sizes.2.5",
        "--slider-track-size": "sizes.0.5",
      },
    },
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
};

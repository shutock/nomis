export const CloseButton = {
  baseStyle: {
    w: ["var(--close-button-size)"],
    h: ["var(--close-button-size)"],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    _hover: {
      "--close-button-bg": "colors.blackAlpha.100",
      _dark: {
        "--close-button-bg": "colors.whiteAlpha.100",
      },
    },
    _active: {
      "--close-button-bg": "colors.blackAlpha.200",
      _dark: {
        "--close-button-bg": "colors.whiteAlpha.200",
      },
    },
    _focusVisible: {
      boxShadow: "outline",
    },
    bg: "var(--close-button-bg)",
  },
  sizes: {
    lg: {
      "--close-button-size": "sizes.10",
      fontSize: "md",
    },
    md: {
      "--close-button-size": "sizes.8",
      fontSize: "xs",
    },
    sm: {
      "--close-button-size": "sizes.6",
      fontSize: "2xs",
    },
  },
  defaultProps: {
    size: "md",
  },
};

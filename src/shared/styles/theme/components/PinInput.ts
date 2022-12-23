export const PinInput = {
  baseStyle: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    textAlign: "center",
  },
  sizes: {
    lg: {
      fontSize: "lg",
      w: 12,
      h: 12,
      borderRadius: "md",
    },
    md: {
      fontSize: "md",
      w: 10,
      h: 10,
      borderRadius: "md",
    },
    sm: {
      fontSize: "sm",
      w: 8,
      h: 8,
      borderRadius: "sm",
    },
    xs: {
      fontSize: "xs",
      w: 6,
      h: 6,
      borderRadius: "sm",
    },
  },
  variants: {
    unstyled: {
      bg: "transparent",
      px: "0",
      height: "auto",
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

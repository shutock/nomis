export const Button = {
  baseStyle: {
    lineHeight: "line",
    borderRadius: "md",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    fontFamily: "inherit",
    _focusVisible: {
      boxShadow: "outline",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    _active: {
      transform: "scale(.95)",
    },
    _hover: {
      _disabled: {
        bg: "initial",
      },
    },
  },
  variants: {
    unstyled: {
      bg: "none",
      color: "inherit",
      display: "inline",
      lineHeight: "inherit",
      m: "0",
      p: "0",
    },
  },
  sizes: {
    lg: {
      h: "12",
      minW: "12",
      fontSize: "lg",
      px: "6",
    },
    md: {
      h: "10",
      minW: "10",
      fontSize: "md",
      px: "4",
    },
    sm: {
      h: "8",
      minW: "8",
      fontSize: "sm",
      px: "3",
    },
    xs: {
      h: "6",
      minW: "6",
      fontSize: "xs",
      px: "2",
    },
  },
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray",
  },
};

export const TextArea = {
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
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  sizes: {
    xs: {
      fontSize: "xs",
      px: "2",
      h: "6",
      borderRadius: "sm",
    },
    sm: {
      fontSize: "sm",
      px: "3",
      h: "8",
      borderRadius: "sm",
    },
    md: {
      fontSize: "md",
      px: "4",
      h: "10",
      borderRadius: "md",
    },
    lg: {
      fontSize: "lg",
      px: "4",
      h: "12",
      borderRadius: "md",
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

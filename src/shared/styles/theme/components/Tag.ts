export const Tag = {
  parts: ["container", "label", "closeButton"],
  variants: {},
  baseStyle: {
    container: {
      fontWeight: "medium",
      lineHeight: 1.2,
      outline: 0,
      borderRadius: "md",
      _focusVisible: {
        boxShadow: "outline",
      },
    },
    label: {
      lineHeight: 1.2,
      overflow: "visible",
    },
    closeButton: {
      fontSize: "lg",
      w: "5",
      h: "5",
      transitionProperty: "common",
      transitionDuration: "normal",
      borderRadius: "full",
      marginStart: "1.5",
      marginEnd: "-1",
      opacity: 0.5,
      _disabled: {
        opacity: 0.4,
      },
      _focusVisible: {
        boxShadow: "outline",
        bg: "rgba(0, 0, 0, 0.14)",
      },
      _hover: {
        opacity: 0.8,
      },
      _active: {
        opacity: 1,
      },
    },
  },
  sizes: {
    sm: {
      container: {
        minH: "5",
        minW: "5",
        fontSize: "xs",
        px: "2",
      },
      closeButton: {
        marginEnd: "-2px",
        marginStart: "0.35rem",
      },
    },
    md: {
      container: {
        minH: "6",
        minW: "6",
        fontSize: "sm",
        px: "2",
      },
    },
    lg: {
      container: {
        minH: "8",
        minW: "8",
        fontSize: "md",
        px: "3",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray",
  },
};

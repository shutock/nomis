export const Input = {
  parts: ["addon", "field", "element"],
  baseStyle: {
    field: {
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
    },
  },
  sizes: {
    lg: {
      field: {
        fontSize: "lg",
        px: "4",
        h: "12",
        borderRadius: "md",
      },
      addon: {
        fontSize: "lg",
        px: "4",
        h: "12",
        borderRadius: "md",
      },
    },
    md: {
      field: {
        fontSize: "md",
        px: "4",
        h: "10",
        borderRadius: "md",
      },
      addon: {
        fontSize: "md",
        px: "4",
        h: "10",
        borderRadius: "md",
      },
    },
    sm: {
      field: {
        fontSize: "sm",
        px: "3",
        h: "8",
        borderRadius: "sm",
      },
      addon: {
        fontSize: "sm",
        px: "3",
        h: "8",
        borderRadius: "sm",
      },
    },
    xs: {
      field: {
        fontSize: "xs",
        px: "2",
        h: "6",
        borderRadius: "sm",
      },
      addon: {
        fontSize: "xs",
        px: "2",
        h: "6",
        borderRadius: "sm",
      },
    },
  },
  variants: {
    unstyled: {
      field: {
        bg: "transparent",
        px: "0",
        height: "auto",
      },
      addon: {
        bg: "transparent",
        px: "0",
        height: "auto",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

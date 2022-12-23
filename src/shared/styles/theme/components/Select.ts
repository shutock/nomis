export const Select = {
  parts: ["field", "icon"],
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
      paddingBottom: "1px",
      lineHeight: "normal",
      bg: "var(--select-bg)",
      "--select-bg": "colors.white",
      _dark: {
        "--select-bg": "colors.gray.700",
      },
      "> option, > optgroup": {
        bg: "var(--select-bg)",
      },
    },
    icon: {
      width: "6",
      height: "100%",
      insetEnd: "2",
      position: "relative",
      color: "currentColor",
      fontSize: "xl",
      _disabled: {
        opacity: 0.5,
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
        paddingInlineEnd: "8",
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
        paddingInlineEnd: "8",
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
        paddingInlineEnd: "8",
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
        paddingInlineEnd: "8",
      },
      addon: {
        fontSize: "xs",
        px: "2",
        h: "6",
        borderRadius: "sm",
      },
      icon: {
        insetEnd: "1",
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

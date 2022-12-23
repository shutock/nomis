export const NumberInput = {
  parts: ["root", "field", "stepperGroup", "stepper"],
  sizes: {
    xs: {
      field: {
        fontSize: "xs",
        px: "2",
        h: "6",
        borderRadius: "sm",
        paddingInlineEnd: "var(--number-input-input-padding)",
        verticalAlign: "top",
      },
      stepper: {
        fontSize: "calc(0.75rem * 0.75)",
        _first: {
          borderTopEndRadius: "sm",
        },
        _last: {
          borderBottomEndRadius: "sm",
          mt: "-1px",
          borderTopWidth: 1,
        },
      },
    },
    sm: {
      field: {
        fontSize: "sm",
        px: "3",
        h: "8",
        borderRadius: "sm",
        paddingInlineEnd: "var(--number-input-input-padding)",
        verticalAlign: "top",
      },
      stepper: {
        fontSize: "calc(0.875rem * 0.75)",
        _first: {
          borderTopEndRadius: "sm",
        },
        _last: {
          borderBottomEndRadius: "sm",
          mt: "-1px",
          borderTopWidth: 1,
        },
      },
    },
    md: {
      field: {
        fontSize: "md",
        px: "4",
        h: "10",
        borderRadius: "md",
        paddingInlineEnd: "var(--number-input-input-padding)",
        verticalAlign: "top",
      },
      stepper: {
        fontSize: "calc(1rem * 0.75)",
        _first: {
          borderTopEndRadius: "md",
        },
        _last: {
          borderBottomEndRadius: "md",
          mt: "-1px",
          borderTopWidth: 1,
        },
      },
    },
    lg: {
      field: {
        fontSize: "lg",
        px: "4",
        h: "12",
        borderRadius: "md",
        paddingInlineEnd: "var(--number-input-input-padding)",
        verticalAlign: "top",
      },
      stepper: {
        fontSize: "calc(1.125rem * 0.75)",
        _first: {
          borderTopEndRadius: "md",
        },
        _last: {
          borderBottomEndRadius: "md",
          mt: "-1px",
          borderTopWidth: 1,
        },
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

export const Divider = {
  baseStyle: {
    opacity: 0.6,
    borderColor: "inherit",
  },
  variants: {
    solid: {
      borderStyle: "solid",
    },
    dashed: {
      borderStyle: "dashed",
    },
  },
  defaultProps: {
    variant: "solid",
  },
};

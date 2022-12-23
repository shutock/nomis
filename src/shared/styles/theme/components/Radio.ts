export const Radio = {
  parts: ["container", "control", "label"],
  sizes: {
    md: {
      control: {
        w: "4",
        h: "4",
      },
      label: {
        fontSize: "md",
      },
    },
    lg: {
      control: {
        w: "5",
        h: "5",
      },
      label: {
        fontSize: "lg",
      },
    },
    sm: {
      control: {
        width: "3",
        height: "3",
      },
      label: {
        fontSize: "sm",
      },
    },
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
};

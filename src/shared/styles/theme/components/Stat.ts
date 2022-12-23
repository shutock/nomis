export const Stat = {
  parts: ["container", "label", "helpText", "number", "icon"],
  baseStyle: {
    container: {},
    label: {
      fontWeight: "medium",
    },
    helpText: {
      opacity: 0.8,
      marginBottom: "2",
    },
    number: {
      verticalAlign: "baseline",
      fontWeight: "semibold",
    },
    icon: {
      marginEnd: 1,
      w: "3.5",
      h: "3.5",
      verticalAlign: "middle",
    },
  },
  sizes: {
    md: {
      label: {
        fontSize: "sm",
      },
      helpText: {
        fontSize: "sm",
      },
      number: {
        fontSize: "2xl",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
};

export const Checkbox = {
  parts: ["control", "icon", "container", "label"],
  sizes: {
    sm: {
      control: {
        "--checkbox-size": "sizes.3",
      },
      label: {
        fontSize: "sm",
      },
      icon: {
        fontSize: "xs",
      },
    },
    md: {
      control: {
        "--checkbox-size": "sizes.4",
      },
      label: {
        fontSize: "md",
      },
      icon: {
        fontSize: "sm",
      },
    },
    lg: {
      control: {
        "--checkbox-size": "sizes.5",
      },
      label: {
        fontSize: "md",
      },
      icon: {
        fontSize: "sm",
      },
    },
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
};

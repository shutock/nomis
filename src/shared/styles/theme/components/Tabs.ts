export const Tabs = {
  parts: ["root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"],
  sizes: {
    sm: {
      tab: {
        py: 1,
        px: 4,
        fontSize: "sm",
      },
    },
    md: {
      tab: {
        fontSize: "md",
        py: 2,
        px: 4,
      },
    },
    lg: {
      tab: {
        fontSize: "lg",
        py: 3,
        px: 4,
      },
    },
  },
  variants: {
    unstyled: {},
  },
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue",
  },
};

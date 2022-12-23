export const Alert = {
  parts: ["title", "description", "container", "icon", "spinner"],
  baseStyle: {
    container: {
      bg: "var(--alert-bg)",
      px: "4",
      py: "3",
    },
    title: {
      fontWeight: "bold",
      lineHeight: "title",
      marginEnd: "2",
    },
    description: {
      lineHeight: "paragraph",
    },
    icon: {
      color: "var(--alert-fg)",
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: "var(--alert-fg)",
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  },
  variants: {},
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue",
  },
};

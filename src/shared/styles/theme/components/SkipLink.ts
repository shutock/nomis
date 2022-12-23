export const SkipLink = {
  baseStyle: {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      "--skip-link-bg": "colors.white",
      _dark: {
        "--skip-link-bg": "colors.gray.700",
      },
      bg: "var(--skip-link-bg)",
    },
  },
};

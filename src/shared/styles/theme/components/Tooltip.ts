export const Tooltip = {
  baseStyle: {
    bg: "var(--tooltip-bg)",
    color: "var(--tooltip-fg)",
    "--tooltip-bg": "colors.gray.700",
    "--tooltip-fg": "colors.whiteAlpha.900",
    _dark: {
      "--tooltip-bg": "colors.gray.300",
      "--tooltip-fg": "colors.gray.900",
    },
    "--popper-arrow-bg": "var(--tooltip-bg)",
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
};

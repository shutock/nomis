export const Popover = {
  parts: [
    "content",
    "header",
    "body",
    "footer",
    "popper",
    "arrow",
    "closeButton",
  ],
  baseStyle: {
    popper: {
      zIndex: 10,
    },
    content: {
      "--popper-bg": "colors.white",
      bg: "var(--popper-bg)",
      "--popper-arrow-bg": "var(--popper-bg)",
      "--popper-arrow-shadow-color": "colors.gray.200",
      _dark: {
        "--popper-bg": "colors.gray.700",
        "--popper-arrow-shadow-color": "colors.whiteAlpha.300",
      },
      width: "xs",
      border: "1px solid",
      borderColor: "inherit",
      borderRadius: "md",
      boxShadow: "sm",
      zIndex: "inherit",
      _focusVisible: {
        outline: 0,
        boxShadow: "outline",
      },
    },
    header: {
      px: 3,
      py: 2,
      borderBottomWidth: "1px",
    },
    body: {
      px: 3,
      py: 2,
    },
    footer: {
      px: 3,
      py: 2,
      borderTopWidth: "1px",
    },
    closeButton: {
      position: "absolute",
      borderRadius: "md",
      top: 1,
      insetEnd: 2,
      padding: 2,
    },
  },
};

export const Menu = {
  parts: ["button", "list", "item", "groupTitle", "command", "divider"],
  baseStyle: {
    button: {
      transitionProperty: "common",
      transitionDuration: "normal",
    },
    list: {
      "--menu-bg": "#fff",
      "--menu-shadow": "shadows.sm",
      _dark: {
        "--menu-bg": "colors.gray.900",
        "--menu-shadow": "shadows.dark-lg",
      },
      color: "inherit",
      minW: "xl",
      py: "2",
      zIndex: 1,
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: "var(--nomis-colors-border-color)",
      bg: "var(--menu-bg)",
      boxShadow: "var(--menu-shadow)",
    },
    item: {
      py: "1.5",
      px: "3",
      transitionProperty: "background",
      transitionDuration: "ultra-fast",
      transitionTimingFunction: "ease-in",
      _focus: {
        "--menu-bg": "colors.gray.100",
        _dark: {
          "--menu-bg": "colors.whiteAlpha.100",
        },
      },
      _active: {
        "--menu-bg": "colors.gray.200",
        _dark: {
          "--menu-bg": "colors.whiteAlpha.200",
        },
      },
      _expanded: {
        "--menu-bg": "colors.gray.100",
        _dark: {
          "--menu-bg": "colors.whiteAlpha.100",
        },
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      bg: "var(--menu-bg)",
    },
    groupTitle: {
      mx: 4,
      my: 2,
      fontWeight: "semibold",
      fontSize: "sm",
    },
    command: {
      opacity: 0.6,
    },
    divider: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "inherit",
      my: "2",
      opacity: 0.6,
    },
  },
};

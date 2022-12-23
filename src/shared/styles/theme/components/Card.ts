export const Card = {
  parts: ["container", "header", "body", "footer"],
  baseStyle: {
    container: {
      "--card-bg": "chakra-body-bg",
      backgroundColor: "var(--card-bg)",
      color: "chakra-body-text",
    },
    body: {
      padding: "var(--card-padding)",
      flex: "1 1 0%",
    },
    header: {
      padding: "var(--card-padding)",
    },
    footer: {
      padding: "var(--card-padding)",
    },
  },
  variants: {
    elevated: {
      container: {
        boxShadow: "base",
        _dark: {
          "--card-bg": "colors.gray.700",
        },
      },
    },
    outline: {
      container: {
        borderWidth: "1px",
        borderColor: "chakra-border-color",
      },
    },
    filled: {
      container: {
        "--card-bg": "colors.chakra-subtle-bg",
      },
    },
    unstyled: {
      body: {
        padding: 0,
      },
      header: {
        padding: 0,
      },
      footer: {
        padding: 0,
      },
    },
  },
  sizes: {
    sm: {
      container: {
        borderRadius: "sm",
        "--card-padding": "space.3",
      },
    },
    md: {
      container: {
        borderRadius: "md",
        "--card-padding": "space.5",
      },
    },
    lg: {
      container: {
        borderRadius: "lg",
        "--card-padding": "space.7",
      },
    },
  },
  defaultProps: {
    variant: "elevated",
    size: "md",
  },
};

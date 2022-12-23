export const Avatar = {
  parts: ["label", "badge", "container", "excessLabel", "group"],
  baseStyle: {
    borderRadius: "full",
  },
  sizes: {
    "2xs": {
      container: {
        width: 4,
        height: 4,
        fontSize: "calc(1rem / 2.5)",
      },
      excessLabel: {
        width: 4,
        height: 4,
      },
      label: {
        fontSize: "calc(1rem / 2.5)",
        lineHeight: "1rem",
      },
    },
    xs: {
      container: {
        width: 6,
        height: 6,
        fontSize: "calc(1.5rem / 2.5)",
      },
      excessLabel: {
        width: 6,
        height: 6,
      },
      label: {
        fontSize: "calc(1.5rem / 2.5)",
        lineHeight: "1.5rem",
      },
    },
    sm: {
      container: {
        width: 8,
        height: 8,
        fontSize: "calc(2rem / 2.5)",
      },
      excessLabel: {
        width: 8,
        height: 8,
      },
      label: {
        fontSize: "calc(2rem / 2.5)",
        lineHeight: "2rem",
      },
    },
    md: {
      container: {
        width: 12,
        height: 12,
        fontSize: "calc(3rem / 2.5)",
      },
      excessLabel: {
        width: 12,
        height: 12,
      },
      label: {
        fontSize: "calc(3rem / 2.5)",
        lineHeight: "3rem",
      },
    },
    lg: {
      container: {
        width: 16,
        height: 16,
        fontSize: "calc(4rem / 2.5)",
      },
      excessLabel: {
        width: 16,
        height: 16,
      },
      label: {
        fontSize: "calc(4rem / 2.5)",
        lineHeight: "4rem",
      },
    },
    xl: {
      container: {
        width: 24,
        height: 24,
        fontSize: "calc(6rem / 2.5)",
      },
      excessLabel: {
        width: 24,
        height: 24,
      },
      label: {
        fontSize: "calc(6rem / 2.5)",
        lineHeight: "6rem",
      },
    },
    "2xl": {
      container: {
        width: 32,
        height: 32,
        fontSize: "calc(8rem / 2.5)",
      },
      excessLabel: {
        width: 32,
        height: 32,
      },
      label: {
        fontSize: "calc(8rem / 2.5)",
        lineHeight: "8rem",
      },
    },
    full: {
      container: {
        width: "100%",
        height: "100%",
        fontSize: "calc(100% / 2.5)",
      },
      excessLabel: {
        width: "100%",
        height: "100%",
      },
      label: {
        fontSize: "calc(100% / 2.5)",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
};

export const Table = {
  parts: ["table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"],
  baseStyle: {
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: {
      textAlign: "start",
    },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  },
  variants: {
    unstyled: {},
  },
  sizes: {
    sm: {
      th: {
        px: "4",
        py: "1",
        lineHeight: "4",
        fontSize: "xs",
      },
      td: {
        px: "4",
        py: "2",
        fontSize: "sm",
        lineHeight: "4",
      },
      caption: {
        px: "4",
        py: "2",
        fontSize: "xs",
      },
    },
    md: {
      th: {
        px: "6",
        py: "3",
        lineHeight: "4",
        fontSize: "xs",
      },
      td: {
        px: "6",
        py: "4",
        lineHeight: "5",
      },
      caption: {
        px: "6",
        py: "2",
        fontSize: "sm",
      },
    },
    lg: {
      th: {
        px: "8",
        py: "4",
        lineHeight: "5",
        fontSize: "sm",
      },
      td: {
        px: "8",
        py: "5",
        lineHeight: "6",
      },
      caption: {
        px: "6",
        py: "2",
        fontSize: "md",
      },
    },
  },
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray",
  },
};

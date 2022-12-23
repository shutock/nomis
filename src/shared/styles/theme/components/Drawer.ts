export const Drawer = {
  parts: [
    "overlay",
    "dialogContainer",
    "dialog",
    "header",
    "closeButton",
    "body",
    "footer",
  ],
  sizes: {
    xs: {
      dialog: {
        maxW: "xs",
      },
    },
    sm: {
      dialog: {
        maxW: "md",
      },
    },
    md: {
      dialog: {
        maxW: "lg",
      },
    },
    lg: {
      dialog: {
        maxW: "2xl",
      },
    },
    xl: {
      dialog: {
        maxW: "4xl",
      },
    },
    full: {
      dialog: {
        maxW: "100vw",
        h: "100vh",
      },
    },
  },
  defaultProps: {
    size: "xs",
  },
};

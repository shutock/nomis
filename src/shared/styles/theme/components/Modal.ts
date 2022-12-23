export const Modal = {
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
        maxW: "sm",
      },
    },
    md: {
      dialog: {
        maxW: "md",
      },
    },
    lg: {
      dialog: {
        maxW: "lg",
      },
    },
    xl: {
      dialog: {
        maxW: "xl",
      },
    },
    "2xl": {
      dialog: {
        maxW: "2xl",
      },
    },
    "3xl": {
      dialog: {
        maxW: "3xl",
      },
    },
    "4xl": {
      dialog: {
        maxW: "4xl",
      },
    },
    "5xl": {
      dialog: {
        maxW: "5xl",
      },
    },
    "6xl": {
      dialog: {
        maxW: "6xl",
      },
    },
    full: {
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
};

export const Breadcrumb = {
  parts: ["link", "item", "container", "separator"],
  baseStyle: {
    link: {
      transitionProperty: "common",
      transitionDuration: "fast",
      transitionTimingFunction: "ease-out",
      cursor: "pointer",
      textDecoration: "none",
      outline: "none",
      color: "inherit",
      _hover: {
        textDecoration: "underline",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
    },
  },
};

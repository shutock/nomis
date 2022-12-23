export const Accordion = {
  parts: ["root", "container", "button", "panel", "icon"],
  baseStyle: {
    container: {
      borderTopWidth: "1px",
      borderColor: "inherit",
      _last: {
        borderBottomWidth: "1px",
      },
    },
    button: {
      transitionProperty: "common",
      transitionDuration: "normal",
      fontSize: "md",
      _focusVisible: {
        boxShadow: "outline",
      },
      _hover: {
        bg: "blackAlpha.50",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      px: "4",
      py: "2",
    },
    panel: {
      pt: "2",
      px: "4",
      pb: "5",
    },
    icon: {
      fontSize: "1.25em",
    },
  },
};

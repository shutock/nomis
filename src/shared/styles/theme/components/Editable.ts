export const Editable = {
  parts: ["preview", "input", "textarea"],
  baseStyle: {
    preview: {
      borderRadius: "md",
      py: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
    },
    input: {
      borderRadius: "md",
      py: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
      width: "full",
      _focusVisible: {
        boxShadow: "outline",
      },
      _placeholder: {
        opacity: 0.6,
      },
    },
    textarea: {
      borderRadius: "md",
      py: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
      width: "full",
      _focusVisible: {
        boxShadow: "outline",
      },
      _placeholder: {
        opacity: 0.6,
      },
    },
  },
};

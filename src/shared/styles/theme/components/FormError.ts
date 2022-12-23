export const FormError = {
  parts: ["text", "icon"],
  baseStyle: {
    text: {
      "--form-error-color": "colors.red.500",
      _dark: {
        "--form-error-color": "colors.red.300",
      },
      color: "var(--form-error-color)",
      mt: "2",
      fontSize: "sm",
      lineHeight: "normal",
    },
    icon: {
      marginEnd: "0.5em",
      "--form-error-color": "colors.red.500",
      _dark: {
        "--form-error-color": "colors.red.300",
      },
      color: "var(--form-error-color)",
    },
  },
};

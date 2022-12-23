export const Form = {
  parts: ["container", "requiredIndicator", "helperText"],
  baseStyle: {
    container: {
      width: "100%",
      position: "relative",
    },
    requiredIndicator: {
      marginStart: "1",
      "--form-control-color": "colors.red.500",
      _dark: {
        "--form-control-color": "colors.red.300",
      },
      color: "var(--form-control-color)",
    },
    helperText: {
      mt: "2",
      "--form-control-color": "colors.gray.600",
      _dark: {
        "--form-control-color": "colors.whiteAlpha.600",
      },
      color: "var(--form-control-color)",
      lineHeight: "normal",
      fontSize: "sm",
    },
  },
};

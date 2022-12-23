export const Skeleton = {
  baseStyle: {
    "--skeleton-start-color": "colors.gray.100",
    "--skeleton-end-color": "colors.gray.400",
    _dark: {
      "--skeleton-start-color": "colors.gray.800",
      "--skeleton-end-color": "colors.gray.600",
    },
    background: "var(--skeleton-start-color)",
    borderColor: "var(--skeleton-end-color)",
    opacity: 0.7,
    borderRadius: "sm",
  },
};

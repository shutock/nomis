export const format = { max: 800, min: 350 };

export const useFormatScore = (score: number | undefined) => {
  if (!score) return;
  return Math.round(score * (format.max - format.min) + format.min);
};

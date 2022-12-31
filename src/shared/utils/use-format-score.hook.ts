export const scoreFormat = { max: 800, min: 350 };

export const useFormatScore = (score: number | undefined) => {
  if (!score) return;
  return Math.round(
    score * (scoreFormat.max - scoreFormat.min) + scoreFormat.min
  );
};

export const joinSentence = (string: string) => {
  const words = string.split(" ");

  const joinedSentence = words
    .map((word) => word.trim().toLowerCase())
    .join("");

  return joinedSentence;
};

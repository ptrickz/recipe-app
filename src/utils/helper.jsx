const capitalizeWords = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatToNumberedList = (sentence) => {
  const parts = sentence.split(".").filter((part) => part.trim() !== "");
  return parts.map((part, index) => `${index + 1}. ${part.trim()}`).join("\n");
};

export default { capitalizeWords, formatToNumberedList };

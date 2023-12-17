const startColors = ["#ff69b4", "#e83e8c", "#795548"];
const endColors = ["#fffe8d", "#fd79a8", "#c04848"];

const getRandomGradient = () => {
  const startIndex = Math.floor(Math.random() * startColors.length);
  const endIndex = Math.floor(Math.random() * endColors.length);
  return `linear-gradient(${startColors[startIndex]}, ${endColors[endIndex]})`;
};

export default getRandomGradient;

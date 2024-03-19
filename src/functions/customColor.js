const customColor = () => {
  const colors = ["#00faf8", "#2f82f5", "#005cfa"];
  function getRandomInt() {
    const min = Math.ceil(0);
    const max = Math.floor(colors.length);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const setColors = {
    colorOne: colors[getRandomInt()],
    colorTwo: colors[getRandomInt()],
    colorThree: colors[getRandomInt()],
  };
  return setColors;
};
export default customColor;

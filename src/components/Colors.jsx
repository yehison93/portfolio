import { useState, useEffect } from "react";
const color = ["#00faf8", "#2f82f5", "#005cfa"];
function getRandomInt() {
  const min = Math.ceil(0);
  const max = Math.floor(color.length);
  return Math.floor(Math.random() * (max - min)) + min;
}

const Colors = () => {
  const [colors, setColors] = useState({});

  useEffect(() => {
    setColors({
      colorOne: color[getRandomInt()],
      colorTwo: color[getRandomInt()],
      colorThree: color[getRandomInt()],
    });
  }, []);
  return (
    <style>
      {`
        :root {
          --colorOne: ${colors.colorOne};
          --colorTwo: ${colors.colorTwo};
          --colorThree: ${colors.colorThree};
          --colorFour: var(--blueFour);
        }
      `}
    </style>
  );
};

export default Colors;

import { useMemo } from "react";

const ShuffledBadge = ({ dataSkills = [] }) => {
  const shuffledSkills = useMemo(() => {
    const array = [...dataSkills];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, [dataSkills]);

  return (
    <div className="container">
      <div className="row p-1 m-auto container-skills-main">
        {shuffledSkills.map((item, index) => (
          <div key={item?.id || index} className="col badge container-badges">
            {item?.name || item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShuffledBadge;

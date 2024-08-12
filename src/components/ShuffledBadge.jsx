import { useMemo } from "react";

const ShuffledBadge = ({ dataSkills }) => {
  const shuffledSkills = useMemo(
    () => [...dataSkills].sort(() => Math.random() - 0.5),
    [dataSkills]
  );
  return (
    <div className="container">
      <div className="row p-1 m-auto container-skills-main">
        {shuffledSkills.map((item) => (
          <div className="col badge container-badges">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default ShuffledBadge;

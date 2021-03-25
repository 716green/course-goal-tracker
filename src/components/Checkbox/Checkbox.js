import React, { useState } from "react";

const Checkbox = (props) => {
  const [complete, setCompetionValue] = useState(props.complete);

  const onChangeHandler = () => {
    if (complete) {
      console.log("change to incomplete");
      setCompetionValue(false);
      // props.changeGoalStatusHandler(props.goalId);
    } else {
      console.log("change to complete");
      setCompetionValue(true);
    }
  };

  return (
    <div>
      <input type="checkbox" value={complete} onChange={onChangeHandler} />
    </div>
  );
};

export default Checkbox;

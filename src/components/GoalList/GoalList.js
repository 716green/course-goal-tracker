import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./GoalList.css";

const GoalList = (props) => {
  console.log(props.goals);
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => {
        return (
          <li key={goal.id} className="list-item">
            <span>
              <Checkbox
                complete={goal.complete}
                goalId={goal.id}
                // changeGoalStatusHandler={props.changeGoalStatusHandler(goal.id)}
              />
              {goal.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default GoalList;

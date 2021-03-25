import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: "1" + Math.random().toFixed(2).toString().split(".").join("1"),
      text: enteredText,
    };

    setEnteredText("");

    props.onAddGoal(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;

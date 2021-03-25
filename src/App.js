import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", complete: false, text: "Finish the course" },
    { id: "cg2", complete: true, text: "Learn React" },
    { id: "cg3", complete: false, text: "Build Cool Apps" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  // const changeGoalStatusHandler = (goalId) => {
  //   setCourseGoals(
  //     courseGoals.forEach((courseGoal) => {
  //       if (courseGoal.id === goalId) {
  //         courseGoal.complete = !courseGoal.complete;
  //       }
  //     })
  //   );
  // };

  return (
    <div>
      <h2 className="heading">Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;

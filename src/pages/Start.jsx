import StartWorkout from "../components/StartWorkout";
import ExerciseSection from "../components/ExerciseSection";
import { useState } from "react";
import TimerDisplay from "../components/TimerDisplay";

const Start = () => {
  return (
    <div>
      <TimerDisplay />
      <ExerciseSection />
      <StartWorkout />
    </div>
  );
};

export default Start;

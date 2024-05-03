import React, { createContext, useState, useContext } from "react";

const WorkoutContext = createContext();

export const useWorkout = () => useContext(WorkoutContext);

export const WorkoutProvider = ({ children }) => {
  const [selectedExercises, setSelectedExercises] = useState([]);

  const addExercise = (exercise) => {
    const newExercise = {
      ...exercise,
      sets: [{ weight: "", reps: "" }],
    };
    setSelectedExercises((prev) => [...prev, newExercise]);
  };

  const updateExercises = (newExercises) => {
    setSelectedExercises(newExercises);
  };

  const clearExercises = () => {
    setSelectedExercises([]);
  };

  const handleSetChange = (exerciseIndex, setIndex, field, value) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.map((exercise, exIdx) => {
        if (exIdx === exerciseIndex) {
          const newSets = exercise.sets.map((set, sIdx) => {
            if (sIdx === setIndex) {
              return { ...set, [field]: Number(value) };
            }
            return set;
          });
          return { ...exercise, sets: newSets };
        }
        return exercise;
      })
    );
  };

  const removeExercise = (exerciseIndex) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.filter((_, index) => index !== exerciseIndex)
    );
  };

  const removeSet = (exerciseIndex, setIndex) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.map((exercise, index) => {
        if (index === exerciseIndex) {
          return {
            ...exercise,
            sets: exercise.sets.filter((_, idx) => idx !== setIndex),
          };
        }
        return exercise;
      })
    );
  };

  const addSet = (exerciseIndex) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.map((exercise, index) => {
        if (index === exerciseIndex) {
          return {
            ...exercise,
            sets: [...exercise.sets, { weight: "", reps: "" }],
          };
        }
        return exercise;
      })
    );
  };

  const toggleSetCompleted = (exerciseIndex, setIndex) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.map((exercise, exIndex) => {
        if (exIndex === exerciseIndex) {
          return {
            ...exercise,
            sets: exercise.sets.map((set, sIndex) => {
              if (sIndex === setIndex) {
                return { ...set, completed: !set.completed };
              }
              return set;
            }),
          };
        }
        return exercise;
      })
    );
  };

  const getTotalStats = () => {
    let totalWeight = 0;
    let totalSets = 0;
    let totalReps = 0;

    selectedExercises.forEach((exercise) => {
      exercise.sets.forEach((set) => {
        totalWeight += (Number(set.weight) || 0) * (Number(set.reps) || 0);
        totalSets += 1;
        totalReps += Number(set.reps) || 0;
      });
    });

    return {
      totalWeight: totalWeight / 1000,
      totalSets,
      totalReps,
    };
  };

  return (
    <WorkoutContext.Provider
      value={{
        selectedExercises,
        addExercise,
        updateExercises,
        handleSetChange,
        removeExercise,
        addSet,
        removeSet,
        toggleSetCompleted,
        getTotalStats,
        clearExercises,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExercisesList from "../components/ExercisesList";
import Start from "../pages/Start";
import WorkoutSum from "../components/WorkoutSum";

export const pages = [
  {
    path: "/",
    label: "Hem",
    element: <Home />,
  },
  {
    path: "/träningar",
    label: "Träningar",
    element: <ExercisesList />,
  },
  {
    path: "/start",
    label: "Start",
    element: <Start />,
  },
  {
    path: "/summering",
    label: "Summering",
    element: <WorkoutSum />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  },
]);

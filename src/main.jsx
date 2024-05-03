import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { WorkoutProvider } from "./context/contextWorkout";
import { TimerProvider } from "./context/timerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WorkoutProvider>
    <TimerProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </TimerProvider>
  </WorkoutProvider>
);

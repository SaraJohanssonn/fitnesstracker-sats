import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { useTimer } from "../context/timerContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { startTimer } = useTimer();

  const handleStartWorkout = (e) => {
    e.preventDefault();
    startTimer();
    navigate("/start");
  };

  return (
    <nav className="navbar fixed-bottom navbar-expand navbar-dark bg-dark">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link fs-5"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Hem
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/start" onClick={handleStartWorkout}>
              <FontAwesomeIcon icon={faDumbbell} size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

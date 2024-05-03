import React, { useState } from "react";
import { useTimer } from "../context/timerContext";
import { useWorkout } from "../context/contextWorkout";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "../styling/TimerDisplay.module.css";

const TimerDisplay = () => {
  const { time, stopTimer, resetTimer, isActive } = useTimer();
  const { clearExercises } = useWorkout();
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleStopClick = () => {
    setShowConfirm(true);
  };

  const handleClose = () => {
    setShowConfirm(false);
  };

  const handleConfirmStop = () => {
    stopTimer();
    resetTimer();
    clearExercises();
    navigate("/");
  };

  const handleFinishWorkout = () => {
    stopTimer();

    navigate("/summering");
  };

  return (
    <div className={styles.timerContainer}>
      {isActive && (
        <Button
          className={styles.stopButton}
          variant="danger"
          onClick={handleStopClick}
        >
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </Button>
      )}
      <h4 className={styles.timerText}>{formatTime(time)}</h4>
      {isActive && (
        <div onClick={handleFinishWorkout} className={styles.finishButton}>
          <FontAwesomeIcon icon={faCheck} size="2x" />
        </div>
      )}
      <Modal show={showConfirm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Avbryt träningen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Är du säker på att du vill avbryta träningen? All data kommer gå
          förlorad.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fortsätt träna
          </Button>
          <Button variant="light" onClick={handleConfirmStop}>
            Avsluta träningen
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TimerDisplay;

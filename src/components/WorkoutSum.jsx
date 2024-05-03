import React from "react";
import { useTimer } from "../context/timerContext";
import { useWorkout } from "../context/contextWorkout";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WorkoutSum = () => {
  const { time, resetTimer } = useTimer();
  const { clearExercises } = useWorkout();
  const { getTotalStats } = useWorkout();
  const stats = getTotalStats();
  const navigate = useNavigate();

  const handleFinish = () => {
    resetTimer();
    clearExercises();
    navigate("/");
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <Container className="bg-dark text-white p-3 my-3">
      <Row className="mb-3">
        <Col>
          <h3 className="text-center">Bra jobbat!</h3>
          <h5 className="text-center">
            Här är en summering från dagens träning
          </h5>
        </Col>
      </Row>

      <Row className="text-center mb-3">
        <Col>
          <div>Tid</div>
          <div className="fw-bold">{formatTime()}</div>
        </Col>
        <Col>
          <div>Total vikt</div>
          <div className="fw-bold">{stats.totalWeight} Ton</div>{" "}
        </Col>
        <Col>
          <div>Antal set</div>
          <div className="fw-bold">{stats.totalSets}</div>
        </Col>
        <Col>
          <div>Antal reps</div>
          <div className="fw-bold">{stats.totalReps}</div>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <Button variant="light" onClick={handleFinish}>
            Klar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkoutSum;

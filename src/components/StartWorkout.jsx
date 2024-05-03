import React from "react";
import { useWorkout } from "../context/contextWorkout";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const StartWorkout = () => {
  const { getTotalStats } = useWorkout();
  const stats = getTotalStats();

  const navigate = useNavigate();

  const handleAddExercise = () => {
    navigate("/träningar");
  };

  return (
    <Container
      className="bg-dark text-white p-3 my-3 pb-5"
      style={{ borderRadius: "0.25rem", maxWidth: "470px", margin: "auto" }}
    >
      <Row className="mb-3">
        <Col>
          <Button variant="light" onClick={handleAddExercise}>
            + Övning
          </Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <h4 className="text-center">Sammanställning</h4>
        </Col>
      </Row>
      <Row className="text-center">
        <Col xs={4}>
          <div>Total vikt</div>
          <div className="fw-bold">{stats.totalWeight} ton</div>
        </Col>
        <Col xs={4}>
          <div>Antal set</div>
          <div className="fw-bold">{stats.totalSets}</div>
        </Col>
        <Col xs={4}>
          <div>Antal reps</div>
          <div className="fw-bold">{stats.totalReps}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default StartWorkout;

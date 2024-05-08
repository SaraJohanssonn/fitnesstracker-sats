import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useWorkout } from "../context/contextWorkout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styling/exerciseSection.css";

const ExerciseSection = () => {
  const {
    selectedExercises,
    handleSetChange,
    addSet,
    removeExercise,
    removeSet,
    toggleSetCompleted,
  } = useWorkout();

  return (
    <Container
      className="my-4 p-3 text-white"
      style={{ borderRadius: "0.25rem", maxWidth: "500px", margin: "auto" }}
    >
      {selectedExercises.map((exercise, index) => (
        <Card
          key={index}
          className="mb-3 bg-dark text-white"
          style={{ borderRadius: "0.25rem" }}
        >
          <Card.Body>
            <Row className="justify-content-center mb-3">
              <Col className="text-center">
                <h5>{exercise.name}</h5>
              </Col>
              <Col xs="auto">
                <Button
                  variant="light"
                  size="sm"
                  onClick={() => removeExercise(index)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </Button>
              </Col>
            </Row>
            {exercise.sets.map((set, setIndex) => (
              <Row
                key={setIndex}
                className={`align-items-center ${
                  set.completed ? "set-completed" : ""
                }`}
              >
                <Col
                  xs={2}
                  className="text-center set-label"
                  onClick={() => toggleSetCompleted(index, setIndex)}
                >
                  <span>{setIndex + 1}</span>
                </Col>
                <Col xs={8} className="d-flex align-items-center">
                  <Form.Control
                    size="sm"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={set.weight}
                    className="input-minimalist"
                    onChange={(e) =>
                      handleSetChange(index, setIndex, "weight", e.target.value)
                    }
                  />
                  <span className="ms-2">kg</span>
                  <Form.Control
                    size="sm"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={set.reps}
                    className="input-minimalist"
                    onChange={(e) =>
                      handleSetChange(index, setIndex, "reps", e.target.value)
                    }
                  />
                  <span className="ms-2">reps</span>
                </Col>
                <Col xs={2} className="text-center">
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSet(index, setIndex);
                    }}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </Button>
                </Col>
              </Row>
            ))}
            <Row className="mt-3">
              <Col className="text-left">
                <Button
                  variant="light"
                  size="sm"
                  onClick={() => addSet(index)}
                  className="text-button"
                >
                  + Set
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ExerciseSection;

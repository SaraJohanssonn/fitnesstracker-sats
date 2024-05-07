import { useEffect, useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { useWorkout } from "../context/contextWorkout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { fetchExercises } from "../services/exerciseService";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styling/exerciseList.css";

const ExercisesList = () => {
  const { addExercise } = useWorkout();
  const [muscleGroups] = useState([
    "abdominals",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "triceps",
  ]);
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedMuscle) {
      const apiKey = import.meta.env.VITE_API_KEY;
      fetchExercises(selectedMuscle, apiKey).then(setExercises);
    }
  }, [selectedMuscle]);

  const handleAddAndNavigate = (exercise) => {
    addExercise(exercise);
    navigate("/start");
  };

  const handleBack = () => {
    if (selectedMuscle) {
      setSelectedMuscle("");
    } else {
      navigate("/start");
    }
  };

  const formatMuscleName = (name) => {
    return name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Container
      className="my-4"
      style={{ borderRadius: "0.25rem", maxWidth: "600px", margin: "auto" }}
    >
      <Button onClick={handleBack} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Button>
      <h1 className="text-center mb-4 text-white">Övningar</h1>
      {!selectedMuscle ? (
        <Row className="justify-content-center">
          <Col md={6}>
            <ListGroup>
              {muscleGroups.map((muscle, index) => (
                <ListGroup.Item
                  key={index}
                  className="exercise-list-item bg-dark"
                  onClick={() => setSelectedMuscle(muscle)}
                >
                  {formatMuscleName(muscle)}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      ) : (
        <Row className="mt-3">
          <Col>
            <ListGroup className="mb-3 w-100">
              {exercises.map((exercise, index) => (
                <ListGroup.Item
                  key={index}
                  className="exercise-list-item bg-dark"
                  onClick={() => handleAddAndNavigate(exercise)}
                >
                  {exercise.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ExercisesList;

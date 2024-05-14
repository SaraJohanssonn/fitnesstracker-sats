import axios from "axios";

const fetchExercises = async (muscle, apiKey) => {
  const localStorageKey = `exercises_${muscle}`;
  const cachedExercises = localStorage.getItem(localStorageKey);

  if (cachedExercises) {
    return JSON.parse(cachedExercises);
  } else {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
        {
          headers: { "X-Api-Key": apiKey },
        }
      );
      localStorage.setItem(localStorageKey, JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error("Error fetching exercises:", error);
      throw error;
    }
  }
};

export { fetchExercises };

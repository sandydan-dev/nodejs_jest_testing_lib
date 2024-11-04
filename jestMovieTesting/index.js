const express = require("express");
const app = express();
const port = 3000;

const {
  getAllMovies,
  getMoviesById,
  addNewMovie,
} = require("./controllers/movie.controller");

// middelware
app.use(express.json());

// get all movies list

app.get("/movies", (_, res) => {
  let response = getAllMovies();
  if (!response) {
    res.status(404).send({ message: "No movies found" });
  }
  return res.status(200).json(response);
});

// get  movie by id

app.get("/movies/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let response = getMoviesById(id);
  res.status(200).json(response);
});

// add new movies
app.post("/movies/new", (req, res) => {
  let response = addNewMovie(req.body);
  res.status(201).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

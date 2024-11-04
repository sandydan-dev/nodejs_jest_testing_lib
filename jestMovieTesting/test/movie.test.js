const {
  getAllMovies,
  getMoviesById,
  addNewMovie,
} = require("../controllers/movie.controller");

describe("movies functions", () => {
  // get all movies
  it("should return  all movies", () => {
    const movieData = [
      { id: 1, title: "The Shawshank Redemption", director: "Frank Darabont" },
      { id: 2, title: "The Godfather", director: "Francis Ford Coppola" },
      { id: 3, title: "The Dark Knight", director: "Christopher Nolan" },
      { id: 4, title: "Pulp Fiction", director: "Quentin Tarantino" },
    ];
    const movie = getAllMovies();
    expect(movie.length).toBe(4);
    expect(movie).toEqual(movieData);
  });

  // get movie by id
  it("should return movie by id", () => {
    let movieData = {
      id: 1,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
    };
    const movie = getMoviesById(1);
    expect(movie).toEqual(movieData);
  });

  // if movie id not found
  it("should return undefined if movie id not found", () => {
    const movie = getMoviesById(12345);
    expect(movie).toBeUndefined();
  });

  it("should return new movie data, and also return length of all movies", () => {
    const movieData = {
      id: 5,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
    };
    const movie = addNewMovie(movieData);
    expect(movie).toEqual(movieData);
    expect(getAllMovies().length).toBe(5);
  });
});

import React, { useContext } from "react";
import { MovieContext } from "./moviecontext/movieContext";

const MovieList = () => {
  const { movieList } = useContext(MovieContext);
  const [movies] = movieList;
  return (
    <div className="movies">
      {movies.map((movie) => (
        <h1 key={movie.id}> {movie.name} </h1>
      ))}
    </div>
  );
};

export default MovieList;

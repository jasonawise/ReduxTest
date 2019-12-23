import React from "react";
// import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movie = ({ movie }) => (
  <React.Fragment>
    <Overdrive id={`${movie.id}`}>
      {/* <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} /> */}
    </Overdrive>
  </React.Fragment>
);

export default Movie;

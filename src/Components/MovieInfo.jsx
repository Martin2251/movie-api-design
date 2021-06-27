import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//match?
function MovieInfo(props) {
  let { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  useEffect(function () {
    fetch(`http://www.omdbapi.com/?apikey=24885019&i=${movieId}`)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setMovieInfo(data);
      });
  }, []);

  return (
    //as it reads from the api.

    <div className="Movie">
      <div className="movie-poster">
        <img src={movieInfo.Poster} alt="movie"></img>
      </div>
      <div className="movie-text">
        <h4>{movieInfo.Title}</h4>
        <p>{movieInfo.Plot}</p>
        <p>
          <span>Actors </span>
          {movieInfo.Actors}
        </p>
        <p>
          <span>Year </span>
          {movieInfo.Year}
        </p>
        <p>
          <span>Country </span>
          {movieInfo.Country}
        </p>
        <p>
          <span>Genre </span>
          {movieInfo.Genre}
        </p>
        <p>
          <span>Rating </span>
          {movieInfo.imdbRating}
        </p>
        <p>
          <span>Run-time </span>
          {movieInfo.Runtime}
        </p>
        <p>
          <span>Director </span>
          {movieInfo.Director}
        </p>
      </div>
    </div>
  );
}

export default MovieInfo;

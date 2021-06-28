import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//match?
function MovieInfo(props) {
  let { movieId } = useParams();

  const [movieDisplay, setMovieDisplay] = useState({});

  useEffect(function () {
    fetch(`http://www.omdbapi.com/?apikey=24885019&i=${movieId}`)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setMovieDisplay(data);
      });
  }, []);

  return (
    //as it reads from the api.
    <div>
      <h1>{movieDisplay.Title}</h1>
      <p>{movieDisplay.Plot}</p>
      <p>{movieDisplay.Genre}</p>
      <p>{movieDisplay.Year}</p>
    </div>
  );
}

export default MovieInfo;

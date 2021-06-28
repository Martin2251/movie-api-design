import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

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
  });

  return (
    //as it reads from the api.
    <div>
      <div>
        {" "}
        <h1>{movieDisplay.Title}</h1>
        <p>Plot: {movieDisplay.Plot}</p>
        <p>Rating: {movieDisplay.imdbRating}</p>
        <p>Actors: {movieDisplay.Actors}</p>
        <p>Genre: {movieDisplay.Genre}</p>
        <p>Year: {movieDisplay.Year}</p>
        <p>Country: {movieDisplay.Country}</p>
      </div>

      <div>
        <Link to={"/"}>
          <Button size="medium" variant="contained">
            Back to Main Page
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MovieInfo;

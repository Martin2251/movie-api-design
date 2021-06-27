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
    <div>
      {" "}
      <p>some text</p>
      <p>some text</p>
    </div>
  );
}

export default MovieInfo;

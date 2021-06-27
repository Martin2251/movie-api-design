import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import Image from "../assets/images/sorry-image-not-available.png";
import { Pagination } from "@material-ui/lab";
import { Link } from "react-router-dom";
// import Typography from '@material-ui/core/Typography';

function MainContent() {
  const [search, setSearch] = useState("James Bond");
  const [listFilm, setListFilm] = useState([]);
  const [nrPages, setNrPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?s=${search}&page=${currentPage}&apikey=24885019`
    )
      .then((response) => response.json())
      .then((data) => {
        setListFilm(data.Search);
        const temp = Math.ceil(data.totalResults / 10);
        setNrPages(temp);
      });
  }, [currentPage]);
  const pagesList = [];
  for (let i = 1; i <= nrPages; i++) {
    pagesList.push(i);
  }
  function getMovies(event) {
    fetch(
      `https://www.omdbapi.com/?s=${search}&page=${currentPage}&apikey=24885019`
    )
      .then((response) => response.json())

      .then((data) => {
        setListFilm(data.Search);
        const temp = Math.ceil(data.totalResults / 10);
        setNrPages(temp);
        const pagesList = [];
        for (let i = 1; i <= nrPages; i++) {
          pagesList.push(i);
        }
      });
  }

  return (
    <Box>
      <Box className="search-section">
        <TextField
          size="small"
          id="outlined-basic"
          label="Search Movie..."
          variant="outlined"
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button size="medium" variant="contained" onClick={getMovies}>
          Search
        </Button>
      </Box>

      <Box className="box">
        {!listFilm && <p>Sorry no movie found!</p>}

        {listFilm?.map(function (film) {
          return (
            <Box className="row" style={{ backgroundColor: "#e5e5e5" }}>
              {film.Poster !== "N/A" && (
                <img
                  className="col left poster"
                  src={film.Poster}
                  alt={film.Title}
                ></img>
              )}
              {film.Poster === "N/A" && (
                <img
                  className="col left poster"
                  src={Image}
                  alt={film.Title}
                ></img>
              )}
              <Box className="col right">
                <p>{film.Title}</p>
                <p>{film.Year}</p>
                <Link to={`/movieInfo/${film.imdbID}`}>
                  <Button size="medium" variant="contained">
                    More Info
                  </Button>
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className="pages">
        {/* <Typography>page: {currentPage}</Typography> */}
        <Pagination
          count={nrPages}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  );
}

export default MainContent;

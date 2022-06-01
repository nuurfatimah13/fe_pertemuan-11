import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';

function NowPlayingMovie() {
  // simpan API_KEY dan URL ke variable
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  // Membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line 
  async function getNowPlayingMovies() {
    // Fetch data dari axios
    const response = await axios(URL);

    // simpan data ke state movie
    setMovies(response.data.results);
    // eslint-disable-next-line
  }

  return (
    <>
      <Hero />
      <Movies titlePage="Now Playing Movies" movies={movies} />
    </>
  );
}

export default NowPlayingMovie;

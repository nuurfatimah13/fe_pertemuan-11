/* import Styled Component Movie */
import React from 'react';
import StyledMovie from './Movie.styled';

// menerima props
function Movie(props) {
  // destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <h3>{movie.title}</h3>
      <img 
        src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
        alt={movie.title} 
        />
      <p>{movie.year || movie.release_date}</p>
    </StyledMovie>
  );
}

export default Movie;

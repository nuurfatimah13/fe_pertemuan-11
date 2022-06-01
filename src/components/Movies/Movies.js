/**
 * import CSS Module Movies
 * simpan di variable styles
 */
import React from 'react';
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';
import { nanoid } from 'nanoid';

/**
* Buat Component Movies
* Menampilkan movie-movie
*/
function Movies(props) {
  const { movies, setMovies } = props;
  const { titlePage } = props;

  // membuat funsi untuk handle Click
  function handleClick() {
    const movie = {
      id: nanoid(),
      title: 'Jurassic Park III',
      year: 2001,
      type: 'Movie',
      poster: 'https://picsum.photos/id/1/300/400',
    };

    /**
    * Jalanin fungsi setMovies
    * Tambahkan data movie ke movies
    * spread operator : copy data array
    */
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{titlePage}</h2>
        <div className={styles.movie__container}>
          {/* looping: map */}
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        {/**
        * Menambahkan button
        * Menambahkan event onClick
        */}
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

// Lakukan export Movies
export default Movies;

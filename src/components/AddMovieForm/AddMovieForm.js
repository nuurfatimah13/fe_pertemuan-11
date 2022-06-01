/**
 * import CSS Module AddMovieForm
 * simpan di variable styles
 */
import { nanoid } from 'nanoid';
import React from 'react';
import { useState } from 'react';
import Button from '../ui/Button';
import styles from './AddMovieForm.module.css';

// Membuat Component AddMovieForm
function AddMovieForm(props) {
  const { movies, setMovies } = props;

  // Buat state object
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    link: '',
    genre: '',
  });

  /**
  * TODO
  * - PROBLEM: 1 ERROR 1 STATE.
  * - TODO: REFACTOR SEMUA ERROR JADI 1 STATE.
  */
  const [ErrorData, setErrorData] = useState({
    isTitleError: false,
    isDateError: false,
    isLinkError: false,
    isGenreError: false,
  });

  // Buat fungsi handleChange
  function handleChange(e) {
    // Destructing name dan value.
    const { name, value } = e.target;

    /**
    * Mengupdate state berupa object:
    * - Menggunakan spread operator:
    * - Update property berdasarkan nilai name.
    */
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === '') {
      setErrorData({
        ...ErrorData,
        isTitleError: true,
      });
      return false;
    } else if (date === '') {
      setErrorData({
        ...ErrorData,
        isDateError: true,
        isTitleError: false,
      });
      return false;
    } else if (link === '') {
      setErrorData({
        ...ErrorData,
        isLinkError: true,
        isDateError: false,
      });
      return false;
    } else if (genre === '') {
      setErrorData({
        ...ErrorData,
        isGenreError: true,
        isLinkError: false,
      });
      return false;
    } else {
      setErrorData({
        ...ErrorData,
        isTitleError: false,
        isDateError: false,
        isLinkError: false,
        isGenreError: false,
      });
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: genre,
      poster: link,
    };

    setMovies([...movies, movie]);
  }

  // Buat fungsi handleSubmit
  function handleSubmit(e) {
    // cegah form agar tidak ke refresh
    e.preventDefault();

    validate() && addMovie();
  }

  const { title, date, link, genre } = formData;
  const { isTitleError, isDateError, isLinkError, isGenreError } = ErrorData;

  return (
    <div className={styles.container}>
      <section className={styles.AddMovieForm}>
        <div className={styles.AddMovieForm__left}>
          <img
            className={styles.AddMovieForm__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
        <div className={styles.AddMovieForm__right}>
          <h2 className={styles.AddMovieForm__title}>Add Movie</h2>
          <form onSubmit={handleSubmit}>
            <label className={styles.AddMovieForm__isi} htmlFor="title">
              Title
            </label>
            <br />
            <input
              className={styles.AddMovieForm__input}
              type="text"
              name="title"
              value={title}
              // Tambahkan event onChange
              onChange={handleChange}
            />
            {/** Jika title error maka munculkan pesan, jika tidak maka kosong */}
            {isTitleError && (
              <span className={styles.AddMovieForm__error}>
                Title wajib diisi
              </span>
            )}
            <br />
            <label className={styles.AddMovieForm__isi} htmlFor="year">
              Year
            </label>
            <br />
            <input
              className={styles.AddMovieForm__input}
              type="text"
              name="date"
              value={date}
              // Tambahkan event onChange
              onChange={handleChange}
            />
            {/** Jika year error maka munculkan pesan, jika tidak maka kosong */}
            {isDateError && (
              <span className={styles.AddMovieForm__error}>
                Year wajib diisi
              </span>
            )}
            <br />
            <label className={styles.AddMovieForm__isi} htmlFor="link">
              Link images
            </label>
            <br />
            <input
              className={styles.AddMovieForm__input}
              type="text"
              name="link"
              value={link}
              // Tambahkan event onChange
              onChange={handleChange}
            />
            {/** Jika link error maka munculkan pesan, jika tidak maka kosong */}
            {isLinkError && (
              <span className={styles.AddMovieForm__error}>
                Link images wajib diisi
              </span>
            )}
            <br />
            <label className={styles.AddMovieForm__isi} htmlFor="genre">
              Genre
            </label>
            <br />
            <select
              className={styles.AddMovieForm__select}
              name="genre"
              onChange={handleChange}
              value={genre}
            >
              <option value=""></option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horor">Horor</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
            </select>
            {/** Jika genre error maka munculkan pesan, jika tidak maka kosong */}
            {isGenreError && (
              <span className={styles.AddMovieForm__error}>
                Genre wajib diisi
              </span>
            )}
            <br />
            <br />
            {/* <input
              className={styles.AddMovieForm__submit}
              type="submit"
              value="Submit"
            /> */}
            <div>
              <Button full>Add Movie</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

// export Component AddMovieForm
export default AddMovieForm;

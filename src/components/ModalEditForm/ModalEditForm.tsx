import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMovie } from '../../actions/movieActions';

import cls from './ModalEditForm.scss';

const ModalEditForm = () => {
  const dispatch = useDispatch();

  const movieDetails = useSelector((state: any) => state.movieDetails);
  const movieUpdate = useSelector((state: any) => state.movieUpdate);

  const optionsList = useSelector((state: any) => state.settings);
  const searchParams = useSelector((state: any) => state.search);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = movieUpdate;

  const {
    title,
    poster_path,
    release_date,
    genres,
    id,
    overview,
    runtime,
  } = movieDetails.movie;

  const [titleNew, setTitle] = useState('');
  const [releaseDateNew, setReleaseDate] = useState('');
  const [imageNew, setImage] = useState('');
  const [genresNEw, setGenres] = useState('');
  const [overviewNew, setOverview] = useState('');
  const [runtimeNEw, setRuntime] = useState(0);

  useEffect(() => {
    setTitle(title),
      setReleaseDate(release_date),
      setImage(poster_path),
      setGenres(genres),
      setOverview(overview),
      setRuntime(runtime);
  }, [movieDetails]);

  const newMovie = {
    id,
    title: titleNew,
    release_date: releaseDateNew,
    poster_path: imageNew,
    genres: genresNEw,
    overview: overviewNew,
    runtime: runtimeNEw,
  };

  return (
    <>
      {errorUpdate && alert(errorUpdate)}
      <div className={cls.mainWrapp}>
        <div className={cls.itemWrapp}>
          <div className={cls.itemTitle}>Movie ID</div>
          <div className={cls.movieId}>{id}</div>
        </div>
        <div className={cls.itemWrapp}>
          <label className={cls.itemTitle} htmlFor={cls.title}>
            Title
          </label>
          <input
            id={cls.title}
            name="title"
            type="text"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={cls.itemWrapp}>
          <label className={cls.itemTitle} htmlFor={cls.releaseDate}>
            Release Date
          </label>
          <input
            id={cls.releaseDate}
            name="release_date"
            type="date"
            defaultValue={release_date}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </div>
        <div className={cls.itemWrapp}>
          <label className={cls.itemTitle} htmlFor={cls.movie}>
            Movie Url
          </label>
          <input
            id={cls.movie}
            name="poster_path"
            type="text"
            defaultValue={poster_path}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className={cls.itemWrapp}>
          <div className={cls.itemTitle}>Genre</div>
          <select
            className={cls.genre}
            // onChange={(e) => setGenres(e.target.value)}
            defaultValue={genres[0]}
          >
            {genres.map((genre: string, key: number) => (
              <option key={key} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className={cls.itemWrapp}>
          <label className={cls.itemTitle} htmlFor={cls.overview}>
            Overview
          </label>
          <input
            id={cls.overview}
            type="text"
            defaultValue={overview}
            onChange={(e) => setOverview(e.target.value)}
            required
          />
        </div>
        <div className={cls.itemWrapp}>
          <label className={cls.itemTitle} htmlFor={cls.runtime}>
            Runtime
          </label>
          <input
            id={cls.runtime}
            type="text"
            defaultValue={runtime}
            onChange={(e) => setRuntime(+e.target.value)}
            required
          />
        </div>
        <button>Reset</button>
        <button
          onClick={() => {
            console.log('newMovie', newMovie);
            dispatch(
              updateMovie(newMovie, { ...optionsList, ...searchParams })
            );
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default ModalEditForm;

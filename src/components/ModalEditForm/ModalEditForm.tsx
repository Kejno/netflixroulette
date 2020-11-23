import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import cls from './ModalEditForm.scss';

const ModalEditForm = () => {
  const [titleNew, setTitle] = useState('');
  const [releaseDateNew, setReleaseDate] = useState('');
  const [imageNew, setImage] = useState('');
  const [genresNEw, setGenres] = useState('');
  const [overviewNew, setOverview] = useState('');
  const [runtimeNEw, setRuntime] = useState(0);

  const movieDetails = useSelector((state: any) => state.movieDetails);

  const {
    title,
    poster_path,
    release_date,
    genres,
    id,
    overview,
    runtime,
  } = movieDetails.movie;

  return (
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
          type="date"
          defaultValue={release_date}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>
      <div className={cls.itemWrapp}>
        <label className={cls.itemTitle} htmlFor={cls.movie}>
          Movie Url
        </label>
        <input
          id={cls.movie}
          type="text"
          defaultValue={poster_path}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className={cls.itemWrapp}>
        <div className={cls.itemTitle}>Genre</div>
        <select
          className={cls.genre}
          onChange={(e) => setGenres(e.target.value)}
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
        />
      </div>
    </div>
  );
};

export default ModalEditForm;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createMovie } from '../actions/movieActions';

import cls from './ModalCreateForm.scss';

interface ModalCreateFormProps {
  closeModalHandler: any;
}

const ModalCreateForm: React.FC<ModalCreateFormProps> = ({
  closeModalHandler,
}) => {
  const dispatch = useDispatch();

  const movieCreate = useSelector((state: any) => state.movieCreate);

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = movieCreate;

  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [image, setImage] = useState('');
  const [genres, setGenres] = useState(['comedy']);
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState(0);

  const newMovie = {
    title,
    release_date: releaseDate,
    poster_path: image,
    genres,
    overview,
    runtime,
  };

  useEffect(() => {
    if (successCreate) {
      closeModalHandler();
    }
  }, [successCreate]);

  const createMovieHandler = () => {
    dispatch(createMovie(newMovie));
  };

  return (
    <>
      <div className={cls.mainWrapp}>
        <div className={cls.itemWrapp}></div>
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
            defaultValue={releaseDate}
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
            defaultValue={image}
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
        <button onClick={createMovieHandler}>Save</button>
      </div>
    </>
  );
};

export default ModalCreateForm;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import searchPath from '../../assets/search.png';
import { isUnVisibleSearchBar } from '../../actions/searchActions';

import cls from './MovieView.scss';

const MovieView = () => {
  const dispatch = useDispatch();

  const movieDetails = useSelector((state: any) => state.movieDetails);

  const {
    title,
    vote_average,
    genres,
    release_date,
    overview,
    poster_path,
  } = movieDetails.movie;

  return (
    <div className={cls.mainWrapp}>
      <div className={cls.imgWrapp}>
        <img src={poster_path} />
      </div>
      <div className={cls.contentWrapp}>
        <div className={cls.titleWrapp}>
          <div className={cls.title}>{title}</div>
          <div className={cls.voteAverage}>
            <span>{vote_average}</span>
          </div>
        </div>
        <div className={cls.genres}>{genres}</div>
        <div className={cls.releaseDate}>
          {new Date(release_date).getFullYear()}
        </div>
        <div className={cls.overview}>{overview}</div>
      </div>
      <img
        className={cls.searchIcon}
        src={searchPath}
        onClick={() => dispatch(isUnVisibleSearchBar())}
      />
    </div>
  );
};

export default MovieView;

import React from 'react';

import cls from './MovieDetails.scss';

interface MovieDetailsProps {
  movie: any;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const { title, release_date, poster_path, genres } = movie;

  return (
    <>
      <img className={cls.movieImg} src={poster_path}></img>
      <div className={cls.movieTitleWrapp}>
        <div>
          <div className={cls.movieTitle}>{title}</div>
          <div className={cls.movieGenres}>{genres}</div>
        </div>
        <div>
          <span className={cls.movieReleaseDate}>
            {new Date(release_date).getFullYear()}
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

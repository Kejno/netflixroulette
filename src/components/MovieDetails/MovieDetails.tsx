import React from 'react';

import cls from './MovieDetails.scss';

interface MovieDetailsProps {
  movie: any;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const { title, release_date, poster_path, genres } = movie;

  return (
    <>
      <div>
        <img className={cls.movieImg} src={poster_path}></img>
      </div>
      <div className={cls.movieTitleWrapp}>
        <div>
          <div className={cls.movieTitle}>{title}</div>
          <div className={cls.movieGenres}>{genres.join(', ')}</div>
        </div>

        <div className={cls.movieReleaseDate}>
          {new Date(release_date).getFullYear()}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

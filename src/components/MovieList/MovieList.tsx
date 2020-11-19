import React from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';

import cls from './MovieList.scss';

interface MovieDetailsProps {
  movies: any;
}

const MovieList: React.FC<MovieDetailsProps> = ({ movies }) => {
  return (
    <div className={cls.movieListContainer}>
      {movies.map((movie: any) => (
        <div className={cls.movieItem} key={movie.id}>
          <MovieDetails movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;

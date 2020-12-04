import React from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';

import cls from './MovieList.scss';

interface MovieDetailsProps {
  movies: any;
  getMovieById: any;
}

const MovieList: React.FC<MovieDetailsProps> = ({ movies, getMovieById }) => {
  return (
    <div className={cls.movieListContainer}>
      {movies.map((movie: any) => (
        <div className={cls.movieItem} key={movie.id}>
          <MovieDetails movie={movie} getMovieById={getMovieById} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;

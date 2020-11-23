import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MenuCardMovie from '../MenuCardMovie/MenuCardMovie';
import { movieDetails } from '../../actions/movieActions';
import { isVisibleSearchBar } from '../../actions/searchActions';

import cls from './MovieDetails.scss';

interface MovieDetailsProps {
  movie: any;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const { title, release_date, poster_path, genres, id } = movie;

  const [opernMenuCard, setOpenMenuCard] = useState(false);

  const dispatch = useDispatch();

  const onToggleMenuCard = () => {
    setOpenMenuCard((state) => !state);
  };

  return (
    <>
      <div className={cls.wrappImg}>
        <div className={cls.menuWrapper} onClick={onToggleMenuCard}>
          <div className={cls.dotsMenu}></div>
        </div>

        {opernMenuCard && (
          <div className={cls.menuCardMovie}>
            <MenuCardMovie id={id} onToggleMenuCard={onToggleMenuCard} />
          </div>
        )}

        <img
          className={cls.movieImg}
          src={poster_path}
          onClick={() => {
            dispatch(isVisibleSearchBar());
            dispatch(movieDetails(id));
          }}
        ></img>
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

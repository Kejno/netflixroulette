import React, { useState } from 'react';
import MenuCardMovie from '../MenuCardMovie/MenuCardMovie';

import cls from './MovieDetails.scss';

interface MovieDetailsProps {
  movie: any;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const { title, release_date, poster_path, genres, id } = movie;

  const [opernMenuCard, setOpenMenuCard] = useState(false);

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
            <MenuCardMovie onToggleMenuCard={onToggleMenuCard} id={id} />
          </div>
        )}

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

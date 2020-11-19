import React from 'react';

const MovieDetails = ({ movie }: any) => {
  const { title, release_date, poster_path, genres } = movie;

  return (
    <>
      <img src={poster_path}></img>
      <div>{title}</div>
      <div>{release_date}</div>
      <div>{genres}</div>
    </>
  );
};

export default MovieDetails;

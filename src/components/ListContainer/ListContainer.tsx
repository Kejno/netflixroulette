import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMovie } from '../../actions/movieActions';
import { tabSortOptions } from '../../constants/mainConstants';
import { changeSortOtps, changeFilterOpts } from '../../actions/optionsActions';
import MovieDetails from '../MovieDetails/MovieDetails';
import Sort from '../Sort/Sort';
import Tab from '../Tab/Tab';

const ListContainer = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state: any) => state.movieList);
  const optionsList = useSelector((state: any) => state.optsSortTabs);

  const { loading, error, movies } = movieList;

  const { data = [] } = movies;
  const { tab } = tabSortOptions;

  useEffect(() => {
    dispatch(listMovie(optionsList));
  }, [optionsList]);

  return (
    <>
      <Tab
        onChangeTab={(key) => {
          dispatch(changeFilterOpts(tab[key]));
        }}
      />
      <Sort
        onChange={(e) => {
          dispatch(changeSortOtps(e.target.value));
        }}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <ul>
          {data.map((movie: any) => (
            <div key={movie.id}>
              <MovieDetails movie={movie} />
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListContainer;

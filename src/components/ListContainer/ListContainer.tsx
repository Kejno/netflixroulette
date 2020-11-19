import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMovie } from '../../actions/movieActions';
import { tabSortOptions } from '../../constants/mainConstants';
import {
  changeSortOtps,
  changeFilterOpts,
} from '../../actions/settingsActions';
import Sort from '../Sort/Sort';
import Tab from '../Tab/Tab';
import MovieList from '../MovieList/MovieList';

import cls from './ListContainer.scss';

const ListContainer = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state: any) => state.movieList);
  const optionsList = useSelector((state: any) => state.settings);
  const searchParams = useSelector((state: any) => state.search);

  const { loading, error, movies } = movieList;

  const { data = [] } = movies;
  const { tab } = tabSortOptions;

  useEffect(() => {
    dispatch(listMovie({ ...optionsList, ...searchParams }));
  }, [optionsList]);

  return (
    <>
      <div className={cls.filterWrapp}>
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
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <MovieList movies={data} />
      )}
    </>
  );
};

export default ListContainer;

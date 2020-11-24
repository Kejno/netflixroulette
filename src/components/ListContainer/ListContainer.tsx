import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../actions/movieActions';
import { tabSortOptions } from '../../constants/mainConstants';
import {
  changeSortOtps,
  changeFilterOpts,
} from '../../actions/settingsActions';
import Loader from '../Loader/Loader';
import Sort from '../Sort/Sort';
import Tab from '../Tab/Tab';
import MovieList from '../MovieList/MovieList';

import cls from './ListContainer.scss';

const ListContainer = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state: any) => state.movieList);
  const optionsList = useSelector((state: any) => state.settings);
  const searchParams = useSelector((state: any) => state.search);
  const movieDelete = useSelector((state: any) => state.movieDelete);
  const movieUpdate = useSelector((state: any) => state.movieUpdate);
  const movieCreate = useSelector((state: any) => state.movieCreate);

  const { loading, error, movies } = movieList;
  const { success: successDelete } = movieDelete;
  const { success: successUpdate } = movieUpdate;
  const { success: successCreate } = movieCreate;

  const { data = [] } = movies;
  const { tab } = tabSortOptions;

  useEffect(() => {
    dispatch(getMovies({ ...optionsList, ...searchParams }));
  }, [optionsList, successDelete, successUpdate, successCreate]);

  return (
    <>
      <div className={cls.filterWrapp}>
        <Tab
          onChangeTab={(key) => {
            dispatch(changeFilterOpts(Object.values(tab)[key]));
          }}
          activeTab={optionsList.filter}
        />
        <Sort
          onChange={(e) => {
            dispatch(changeSortOtps(e.target.value));
          }}
        />
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <div>Error</div>
      ) : (
        <MovieList movies={data} />
      )}
    </>
  );
};

export default ListContainer;

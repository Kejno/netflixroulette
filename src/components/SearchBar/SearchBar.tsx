import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { searchParams } from '../../actions/searchActions';
import { getMovies } from '../../actions/movieActions';
import cls from './SearchBar.scss';

interface FormProps {
  title: string;
  placeholder: string;
  buttonName: string;
  onSubmit(e: React.SyntheticEvent): void;
  history: any;
}

const SearchBar: React.FC<FormProps> = ({
  title,
  placeholder,
  buttonName,
  history,
}) => {
  const dispatch = useDispatch();
  const search = useSelector((state: any) => state.search);

  const searchHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(getMovies(search));
    history.push({ pathname: `/search/${urlParams}` });
  };

  const urlParams = encodeURIComponent(`Search ${search.search}`);

  return (
    <form onSubmit={searchHandler} className={cls.searchForm}>
      <div className={cls.searchTitle}>{title}</div>
      <input
        className={cls.searchInput}
        type="text"
        placeholder={placeholder}
        onChange={(e) => dispatch(searchParams(e.target.value))}
      />
      <button className={cls.searchButton} type="submit">
        {buttonName}
      </button>
    </form>
  );
};

export default SearchBar;

import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchParams } from '../../actions/searchActions';
import cls from './SearchBar.scss';

interface FormProps {
  title: string;
  placeholder: string;
  buttonName: string;
  onSubmit(e: React.SyntheticEvent): void;
}

const SearchBar: React.FC<FormProps> = ({ title, placeholder, buttonName }) => {
  const dispatch = useDispatch();
  const search = useSelector((state: any) => state.search);

  const searchHandler = (e: FormEvent) => {
    e.preventDefault();
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
      <Link to={`/search/${urlParams}`}>
        <button className={cls.searchButton} type="submit">
          {buttonName}
        </button>
      </Link>
    </form>
  );
};

export default SearchBar;

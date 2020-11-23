import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListContainer from '../../components/ListContainer/ListContainer';
import { useSelector } from 'react-redux';
import MovieView from '../../components/MovieView/MovieView';

const HomePage = ({ history }: any) => {
  const isVisibleSearch = useSelector((state: any) => state.isVisibleSearch);
  const { isVisible } = isVisibleSearch;

  return (
    <div>
      {!isVisible ? (
        <SearchBar
          history={history}
          title="Find your movie"
          placeholder="What do you want to watch?"
          buttonName="Search"
          onSubmit={(e: React.ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value)
          }
        />
      ) : (
        <MovieView />
      )}

      <ListContainer />
    </div>
  );
};

export default HomePage;

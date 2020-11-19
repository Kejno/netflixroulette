import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { listMovie } from '../../actions/movieActions';

const HomePage = () => {
  const dispatch = useDispatch();

  // const movieList = useSelector((state: any) => state.movieList);

  // const { loading, error, movies } = movieList;

  // useEffect(() => {
  //   dispatch(listMovie());
  // }, [dispatch]);

  return (
    <div>
      <SearchBar
        title="Find your movie"
        placeholder="What do you want to watch?"
        buttonName="Search"
        onSubmit={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.value)
        }
      />
    </div>
  );
};

export default HomePage;

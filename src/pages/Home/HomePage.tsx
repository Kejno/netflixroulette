import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListContainer from '../../components/ListContainer/ListContainer';

const HomePage = () => {
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
      <ListContainer />
    </div>
  );
};

export default HomePage;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  searchReducer,
  isVisibleSearchBarReducer,
} from './reducers/searchReducer';
import {
  movieListReducer,
  movieDeleteReducer,
  movieDetailsReducer,
  movieUpdateReducer,
  movieCreateReducer,
} from './reducers/movieReducer';
import { settingsReducer } from './reducers/settingsReducer';

const middleware = [thunk];

export const reducer = combineReducers({
  movieList: movieListReducer,
  settings: settingsReducer,
  search: searchReducer,
  movieDetails: movieDetailsReducer,
  movieDelete: movieDeleteReducer,
  movieUpdate: movieUpdateReducer,
  movieCreate: movieCreateReducer,
  isVisibleSearch: isVisibleSearchBarReducer,
});

const InitialState = () => {
  return {};
};

export const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
store.subscribe(() => {
  console.log('Subscribe', store.getState());
});

export default store;

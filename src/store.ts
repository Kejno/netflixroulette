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
} from './reducers/movieReducer';
import { settingsReducer } from './reducers/settingsReducer';

const middleware = [thunk];

const reducer = combineReducers({
  movieList: movieListReducer,
  settings: settingsReducer,
  search: searchReducer,
  movieDetails: movieDetailsReducer,
  movieDelete: movieDeleteReducer,
  movieUpdate: movieUpdateReducer,
  isVisibleSearch: isVisibleSearchBarReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
store.subscribe(() => {
  console.log('Subscribe', store.getState());
});

export default store;

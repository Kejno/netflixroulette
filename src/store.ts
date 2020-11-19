import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { searchReducer } from './reducers/searchReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieListReducer } from './reducers/movieReducer';
import { settingsReducer } from './reducers/settingsReducer';

const middleware = [thunk];

const reducer = combineReducers({
  movieList: movieListReducer,
  settings: settingsReducer,
  search: searchReducer,
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

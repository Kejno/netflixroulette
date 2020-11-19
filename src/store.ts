import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieListReducer } from './reducers/movieReducer';
import { sortTabsReducer } from './reducers/sortTabsReducer';

const middleware = [thunk];

const reducer = combineReducers({
  movieList: movieListReducer,
  optsSortTabs: sortTabsReducer,
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

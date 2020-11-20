import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  DELETE_MOVIE_ITEM,
} from '../constants/movieConstants';

export const movieListReducer = (state: any = { movies: [] }, action: any) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { loading: true, movies: [] };
    case MOVIE_LIST_SUCCESS:
      return { loading: false, movies: action.payload };
    case MOVIE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_MOVIE_ITEM:
      return {
        ...state,
        movies: state.movies.data.filter(
          (movie: any) => +movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

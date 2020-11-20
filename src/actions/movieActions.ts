import axios from 'axios';
import { BASE_URL } from '../constants/mainConstants';
import { geSearchParamsFromObj } from '../utils/commonUtils';
import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  DELETE_MOVIE_ITEM,
} from '../constants/movieConstants';

export const getMovies = (opts: any = {}) => async (dispatch: any) => {
  const searchParams = geSearchParamsFromObj(opts);

  try {
    dispatch({ type: MOVIE_LIST_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/movies?${searchParams}`);

    dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const deleteMovie = (id: number) => (dispatch: any) => {
  dispatch({
    type: DELETE_MOVIE_ITEM,
    payload: id,
  });
};

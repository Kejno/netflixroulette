import axios from 'axios';
import { BASE_URL } from '../constants/mainConstants';

import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
} from '../constants/movieConstants';

const geSearchParamsFromObj = (opts: any) => {
  return Object.entries(opts)
    .map((value) => value.join('='))
    .join('&');
};

export const listMovie = (opts: any = {}) => async (dispatch: any) => {
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

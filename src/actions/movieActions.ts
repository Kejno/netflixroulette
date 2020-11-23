import axios from 'axios';
import { BASE_URL } from '../constants/mainConstants';
import { geSearchParamsFromObj } from '../utils/commonUtils';
import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_SUCCESS,
  MOVIE_DELETE_FAIL,
  MOVIE_UPDATE_REQUEST,
  MOVIE_UPDATE_SUCCESS,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
  MOVIE_UPDATE_FAIL,
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

export const movieDetails = (id: number) => async (dispatch: any) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/movies/${id}`);

    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const deleteMovie = (id: number) => async (dispatch: any) => {
  try {
    dispatch({ type: MOVIE_DELETE_REQUEST });

    await axios.delete(`${BASE_URL}/movies/${id.toString()}`);

    dispatch({ type: MOVIE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: MOVIE_DELETE_FAIL,
      payload: error.message,
    });
  }
};

export const updateMovie = (movie: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: MOVIE_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(`${BASE_URL}/movies/`, movie, config);

    dispatch({
      type: MOVIE_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message = error.message;

    dispatch({
      type: MOVIE_UPDATE_FAIL,
      payload: message,
    });
  }
};

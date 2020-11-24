import {
  IS_VISIBLE_SEARCHBAR,
  IS_UNVISIBLE_SEARCHBAR,
} from './../constants/optionsConstants';
import { SEARCH_PARAMS } from '../constants/optionsConstants';

export const searchParams = (params: string) => {
  return {
    type: SEARCH_PARAMS,
    payload: params,
  };
};

export const isVisibleSearchBar = () => {
  return {
    type: IS_VISIBLE_SEARCHBAR,
  };
};

export const isUnVisibleSearchBar = () => {
  return {
    type: IS_UNVISIBLE_SEARCHBAR,
  };
};

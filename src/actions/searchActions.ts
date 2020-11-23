import { IS_VISIBLE_SEARCHBAR } from './../constants/optionsConstants';
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

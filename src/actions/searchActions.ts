import { SEARCH_PARAMS } from '../constants/optionsConstants';

export const searchParams = (params: string) => {
  return {
    type: SEARCH_PARAMS,
    payload: params,
  };
};

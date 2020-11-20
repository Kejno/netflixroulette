import {
  NEW_SORT_OPTIONS,
  NEW_FILTER_OPTIONS,
} from '../constants/optionsConstants';

export const changeSortOtps = (newOpts: string) => {
  return {
    type: NEW_SORT_OPTIONS,
    payload: newOpts,
  };
};

export const changeFilterOpts = (newOpts: any) => {
  return {
    type: NEW_FILTER_OPTIONS,
    payload: newOpts,
  };
};

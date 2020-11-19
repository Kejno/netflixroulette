import {
  NEW_SORT_OPTIONS,
  NEW_FILTER_OPTIONS,
} from '../constants/optionsConstants';
import { tabSortOptions } from '../constants/mainConstants';

import { optionsActionsTypes } from '../actions/actionsTypes';

const { sort, tab, sortOrder } = tabSortOptions;

const initialState = {
  sortBy: sort[0],
  filter: tab[0],
  sortOrder: sortOrder[1],
};

type InitialStateType = typeof initialState;

export const sortTabsReducer = (
  state = initialState,
  action: optionsActionsTypes
): InitialStateType => {
  switch (action.type) {
    case NEW_SORT_OPTIONS:
      return { ...state, sortBy: action.payload };
    case NEW_FILTER_OPTIONS:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

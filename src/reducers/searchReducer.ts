import {
  IS_VISIBLE_SEARCHBAR,
  IS_UNVISIBLE_SEARCHBAR,
  SEARCH_PARAMS,
} from '../constants/optionsConstants';

const initialState = {
  searchBy: 'title',
  search: '',
};

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_PARAMS:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export const isVisibleSearchBarReducer = (
  state = { isVisible: false },
  action: any
) => {
  switch (action.type) {
    case IS_VISIBLE_SEARCHBAR:
      return { ...state, isVisible: true };
    case IS_UNVISIBLE_SEARCHBAR:
      return { ...state, isVisible: false };
    default:
      return state;
  }
};

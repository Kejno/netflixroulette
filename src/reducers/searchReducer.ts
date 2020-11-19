import { SEARCH_PARAMS } from '../constants/optionsConstants';

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

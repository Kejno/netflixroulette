import {
  NEW_SORT_OPTIONS,
  NEW_FILTER_OPTIONS,
} from '../constants/optionsConstants';

type changeSortOptsActionType = {
  type: typeof NEW_SORT_OPTIONS;
  payload: string;
};

type changeFilterOptsActionType = {
  type: typeof NEW_FILTER_OPTIONS;
  payload: string | null;
};

export type optionsActionsTypes =
  | changeSortOptsActionType
  | changeFilterOptsActionType;

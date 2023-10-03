import ACTIONS from '../utils/ACTIONS';

export type UserState = {
  isLoggedIn: boolean;
  isMember: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  logInError: string[] | { message: string; code: number } | null;
};

// Action types
type ToggleLogInAction = {
  type: typeof ACTIONS.TOGGLE_LOG_IN;
  payload: never;
};

type SetIsAdminAction = {
  type: typeof ACTIONS.SET_IS_ADMIN;
  payload: never;
};

type SetIsMemberAction = {
  type: typeof ACTIONS.SET_IS_MEMBER;
  payload: never;
};

type SaveLogInErrorAction = {
  type: typeof ACTIONS.SAVE_LOG_IN_ERROR;
  payload: {
    error: string[] | { message: string; code: number } | null;
  };
};

type RemoveLogInErrorAction = {
  type: typeof ACTIONS.REMOVE_LOG_IN_ERROR;
  payload: never;
};

type ToggleLoadingAction = {
  type: typeof ACTIONS.TOGGLE_LOADING;
  payload: never;
};

// Union type for all possible actions
export type UserAction =
  | ToggleLogInAction
  | SetIsAdminAction
  | SetIsMemberAction
  | SaveLogInErrorAction
  | RemoveLogInErrorAction
  | ToggleLoadingAction;

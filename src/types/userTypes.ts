import { USER_ACTIONS } from '../utils/ACTIONS';
import { ResError } from './messageTypes';

export type AuthError = string;

export type UserState = {
  isLoggedIn: boolean;
  isMember: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  logInError: AuthError | ResError;
};

// User action types
type ToggleLogInAction = {
  type: typeof USER_ACTIONS.TOGGLE_LOG_IN;
};

type SetIsAdminAction = {
  type: typeof USER_ACTIONS.SET_IS_ADMIN;
};

type SetIsMemberAction = {
  type: typeof USER_ACTIONS.SET_IS_MEMBER;
};

type SaveLogInErrorAction = {
  type: typeof USER_ACTIONS.SAVE_LOG_IN_ERROR;
  payload: {
    error: ResError;
  };
};

type RemoveLogInErrorAction = {
  type: typeof USER_ACTIONS.REMOVE_LOG_IN_ERROR;
};

type ToggleLoadingAction = {
  type: typeof USER_ACTIONS.TOGGLE_LOADING;
};

// Union type for all possible user actions
export type UserAction =
  | ToggleLogInAction
  | SetIsAdminAction
  | SetIsMemberAction
  | SaveLogInErrorAction
  | RemoveLogInErrorAction
  | ToggleLoadingAction;

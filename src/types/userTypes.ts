import { USER_ACTIONS } from '../utils/ACTIONS';
import { ResError, ValidatorError } from './messageTypes';

export type UserState = {
  isLoggedIn: boolean;
  username: string;
  userID: string;
  isMember: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  logInError: ResError;
  signUpError: ResError | ValidatorError[];
  joinUsError: null | ValidatorError[] | ResError;
};

// User action types
type ToggleLogInAction = {
  type: typeof USER_ACTIONS.TOGGLE_LOG_IN;
};

type SaveUserIAction = {
  type: typeof USER_ACTIONS.SAVE_USER_ID;
};

type ToggleIsAdminAction = {
  type: typeof USER_ACTIONS.TOGGLE_IS_ADMIN;
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

type SaveSignUpErrorAction = {
  type: typeof USER_ACTIONS.SAVE_SIGN_UP_ERROR;
  payload: {
    error: ValidatorError[] | ResError;
  };
};

type RemoveSignUpErrorAction = {
  type: typeof USER_ACTIONS.REMOVE_SIGN_UP_ERROR;
};

type SaveJoinUsErrorAction = {
  type: typeof USER_ACTIONS.SAVE_JOIN_US_ERROR;
  payload: {
    error: ValidatorError[] | ResError;
  };
};

type RemoveJoinUsErrorAction = {
  type: typeof USER_ACTIONS.REMOVE_JOIN_US_ERROR;
};

// Union type for all possible user actions
export type UserAction =
  | ToggleLogInAction
  | SaveUserIAction
  | ToggleIsAdminAction
  | SetIsMemberAction
  | SaveLogInErrorAction
  | RemoveLogInErrorAction
  | ToggleLoadingAction
  | SaveSignUpErrorAction
  | RemoveSignUpErrorAction
  | SaveJoinUsErrorAction
  | RemoveJoinUsErrorAction;

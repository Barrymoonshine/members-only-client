import { USER_ACTIONS } from '../utils/ACTIONS';
import { ResError, ValidatorError } from './messageTypes';

export type UserState = {
  isLoggedIn: boolean;
  username: string;
  userID: string;
  isMember: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  logInError: ResError | ValidatorError[];
  signUpError: ResError | ValidatorError[];
  joinUsError: null | ValidatorError[] | ResError;
};

// User action types
// Payload never used to confirm a payload will never be sent with certain actions
// In addition making payload optional indicated that dispatches are not required to have a payload
type ToggleLogInAction = {
  type: typeof USER_ACTIONS.TOGGLE_LOG_IN;
  payload?: never;
};

type SaveUserIdAction = {
  type: typeof USER_ACTIONS.SAVE_USER_ID;
  payload: {
    id: string;
  };
};

type SaveUsernameAction = {
  type: typeof USER_ACTIONS.SAVE_USERNAME;
  payload: {
    username: string;
  };
};

type ToggleIsAdminAction = {
  type: typeof USER_ACTIONS.TOGGLE_IS_ADMIN;
  payload?: never;
};

type SetIsMemberAction = {
  type: typeof USER_ACTIONS.SET_IS_MEMBER;
  payload: never;
};

type SaveLogInErrorAction = {
  type: typeof USER_ACTIONS.SAVE_LOG_IN_ERROR;
  payload: {
    error: ResError;
  };
};

type RemoveLogInErrorAction = {
  type: typeof USER_ACTIONS.REMOVE_LOG_IN_ERROR;
  payload?: never;
};

type ToggleLoadingAction = {
  type: typeof USER_ACTIONS.TOGGLE_LOADING;
  payload?: never;
};

type SaveSignUpErrorAction = {
  type: typeof USER_ACTIONS.SAVE_SIGN_UP_ERROR;
  payload: {
    error: ValidatorError[] | ResError;
  };
};

type RemoveSignUpErrorAction = {
  type: typeof USER_ACTIONS.REMOVE_SIGN_UP_ERROR;
  payload: never;
};

type SaveJoinUsErrorAction = {
  type: typeof USER_ACTIONS.SAVE_JOIN_US_ERROR;
  payload: {
    error: ValidatorError[] | ResError;
  };
};

type RemoveJoinUsErrorAction = {
  type: typeof USER_ACTIONS.REMOVE_JOIN_US_ERROR;
  payload?: never;
};

type ResetUserDataAction = {
  type: typeof USER_ACTIONS.RESET_USER_DATA;
  payload?: never;
};

// Union type for all possible user actions
export type UserAction =
  | ToggleLogInAction
  | SaveUserIdAction
  | SaveUsernameAction
  | ToggleIsAdminAction
  | SetIsMemberAction
  | SaveLogInErrorAction
  | RemoveLogInErrorAction
  | ToggleLoadingAction
  | SaveSignUpErrorAction
  | RemoveSignUpErrorAction
  | SaveJoinUsErrorAction
  | RemoveJoinUsErrorAction
  | ResetUserDataAction;

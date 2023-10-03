import ACTIONS from '../utils/ACTIONS';

export type Messages = {
  _id: string;
  username: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Union type for possible error types
export type ResError =
  | string
  | string[]
  | { message: string; code: number }
  | null;

export type UserState = {
  isLoggedIn: boolean;
  isMember: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  logInError: Error;
  messages: Messages | null;
  messagesError: Error;
};

// Action types
type ToggleLogInAction = {
  type: typeof ACTIONS.TOGGLE_LOG_IN;
};

type SetIsAdminAction = {
  type: typeof ACTIONS.SET_IS_ADMIN;
};

type SetIsMemberAction = {
  type: typeof ACTIONS.SET_IS_MEMBER;
};

type SaveLogInErrorAction = {
  type: typeof ACTIONS.SAVE_LOG_IN_ERROR;
  payload: {
    error: string[] | { message: string; code: number } | null;
  };
};

type RemoveLogInErrorAction = {
  type: typeof ACTIONS.REMOVE_LOG_IN_ERROR;
};

type ToggleLoadingAction = {
  type: typeof ACTIONS.TOGGLE_LOADING;
};

type SaveMessagesAction = {
  type: typeof ACTIONS.SAVE_MESSAGES;
};

type SaveMessagesErrorAction = {
  type: typeof ACTIONS.SAVE_MESSAGES_ERROR;
};

type RemoveMessagesErrorAction = {
  type: typeof ACTIONS.REMOVE_MESSAGES_ERROR;
};

// Union type for all possible actions
export type UserAction =
  | ToggleLogInAction
  | SetIsAdminAction
  | SetIsMemberAction
  | SaveLogInErrorAction
  | RemoveLogInErrorAction
  | ToggleLoadingAction
  | SaveMessagesAction
  | SaveMessagesErrorAction
  | RemoveMessagesErrorAction;

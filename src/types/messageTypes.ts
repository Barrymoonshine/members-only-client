import { MESSAGE_ACTIONS } from '../utils/ACTIONS';

export type Message = {
  _id: string;
  username: string;
  title: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ValidatorError = {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
};

// Union type for possible server response error types
export type ResError =
  | string
  | string[]
  | { message: string; code: number }
  | null;

export type MessageState = {
  messages: Message[] | null;
  messagesError: ResError | null | ValidatorError[];
  messagesLoading: boolean;
  createError: ResError | ValidatorError[] | null;
};

// Message action types
// Payload never used to confirm a payload will never be sent with certain actions
// In addition making payload optional indicated that dispatches are not required to have a payload
type SaveMessagesAction = {
  type: typeof MESSAGE_ACTIONS.SAVE_MESSAGES;
  payload: {
    messages: Message[];
  };
};

type SaveMessagesErrorAction = {
  type: typeof MESSAGE_ACTIONS.SAVE_MESSAGES_ERROR;
  payload: {
    error: ResError;
  };
};

type RemoveMessagesErrorAction = {
  type: typeof MESSAGE_ACTIONS.REMOVE_MESSAGES_ERROR;
  payload?: never;
};

type SaveCreateErrorAction = {
  type: typeof MESSAGE_ACTIONS.SAVE_CREATE_ERROR;
  payload: {
    error: ValidatorError[] | ResError;
  };
};

type ToggleMessagesLoadingAction = {
  type: typeof MESSAGE_ACTIONS.TOGGLE_MESSAGES_LOADING;
  payload?: never;
};

type RemoveCreateErrorAction = {
  type: typeof MESSAGE_ACTIONS.REMOVE_MESSAGES_ERROR;
  payload?: never;
};

// Union type for all possible message actions
export type MessageAction =
  | SaveMessagesAction
  | SaveMessagesErrorAction
  | RemoveMessagesErrorAction
  | SaveCreateErrorAction
  | ToggleMessagesLoadingAction
  | RemoveCreateErrorAction;

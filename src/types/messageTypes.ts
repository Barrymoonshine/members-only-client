import { MESSAGE_ACTIONS } from '../utils/ACTIONS';

export type Message = {
  _id: string;
  username: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Union type for possible server response error types
export type ResError =
  | string
  | string[]
  | { message: string; code: number }
  | null;

export type MessageState = {
  messages: Message | null;
  messagesError: ResError;
  messagesLoading: boolean;
};

// Message action types
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
};

// Union type for all possible message actions
export type MessageAction =
  | SaveMessagesAction
  | SaveMessagesErrorAction
  | RemoveMessagesErrorAction;

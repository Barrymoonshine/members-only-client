import { MESSAGE_ACTIONS } from '../utils/ACTIONS';
import { MessageState, MessageAction } from '../types/messageTypes';

export const initialState: MessageState = {
  messages: null,
  messagesError: null,
  messagesLoading: false,
};

const userReducer = (state: MessageState, action: MessageAction) => {
  switch (action.type) {
    case MESSAGE_ACTIONS.SAVE_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages,
      };
    case MESSAGE_ACTIONS.SAVE_MESSAGES_ERROR:
      return {
        ...state,
        messagesError: action.payload.error,
      };
    case MESSAGE_ACTIONS.REMOVE_MESSAGES_ERROR:
      return {
        ...state,
        messagesError: null,
      };
    case MESSAGE_ACTIONS.TOGGLE_MESSAGES_LOADING:
      return {
        ...state,
        messagesLoading: !state.messagesLoading,
      };
    default:
      return state;
  }
};

export default userReducer;

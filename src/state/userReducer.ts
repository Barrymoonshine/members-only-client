import ACTIONS from '../utils/ACTIONS';
import { UserState, UserAction } from './reducerTypes';

export const initialState: UserState = {
  isLoggedIn: false,
  isMember: false,
  isAdmin: false,
  isLoading: false,
  logInError: null,
  messages: null,
  messagesError: null,
};

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_LOG_IN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case ACTIONS.SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: true,
      };
    case ACTIONS.SET_IS_MEMBER:
      return {
        ...state,
        isMember: true,
      };
    case ACTIONS.SAVE_LOG_IN_ERROR:
      return {
        ...state,
        logInError: action.payload.error,
      };
    case ACTIONS.REMOVE_LOG_IN_ERROR:
      return {
        ...state,
        logInError: null,
      };
    case ACTIONS.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case ACTIONS.SAVE_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages,
      };
    case ACTIONS.SAVE_MESSAGES_ERROR:
      return {
        ...state,
        messagesError: action.payload.error,
      };
    case ACTIONS.REMOVE_MESSAGES_ERROR:
      return {
        ...state,
        messagesError: null,
      };
    default:
      return state;
  }
};

export default userReducer;

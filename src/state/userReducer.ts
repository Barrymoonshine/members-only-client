import { USER_ACTIONS } from '../utils/ACTIONS';
import { UserState, UserAction } from '../types/userTypes';

export const initialState: UserState = {
  isLoggedIn: false,
  username: '',
  userID: '',
  isMember: false,
  isAdmin: false,
  isLoading: false,
  logInError: null,
  signUpError: null,
  joinUsError: null,
};

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case USER_ACTIONS.TOGGLE_LOG_IN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case USER_ACTIONS.SAVE_USER_ID:
      if (action.payload && 'id' in action.payload) {
        return {
          ...state,
          userID: action.payload.id,
        };
      }
      return state;
    case USER_ACTIONS.SAVE_USERNAME:
      if (action.payload && 'username' in action.payload) {
        return {
          ...state,
          username: action.payload.username,
        };
      }
      return state;
    case USER_ACTIONS.TOGGLE_IS_ADMIN:
      return {
        ...state,
        isAdmin: !state.isAdmin,
      };
    case USER_ACTIONS.SET_IS_MEMBER:
      return {
        ...state,
        isMember: true,
      };
    case USER_ACTIONS.SAVE_LOG_IN_ERROR:
      if (action.payload && 'error' in action.payload) {
        return {
          ...state,
          logInError: action.payload.error,
        };
      }
      return state;
    case USER_ACTIONS.REMOVE_LOG_IN_ERROR:
      return {
        ...state,
        logInError: null,
      };
    case USER_ACTIONS.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case USER_ACTIONS.SAVE_SIGN_UP_ERROR:
      if (action.payload && 'error' in action.payload) {
        return {
          ...state,
          signUpError: action.payload.error,
        };
      }
      return state;
    case USER_ACTIONS.REMOVE_SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: null,
      };
    case USER_ACTIONS.SAVE_JOIN_US_ERROR:
      if (action.payload && 'error' in action.payload) {
        return {
          ...state,
          joinUsError: action.payload.error,
        };
      }
      return state;
    case USER_ACTIONS.REMOVE_JOIN_US_ERROR:
      return {
        ...state,
        joinUsError: null,
      };
    case USER_ACTIONS.RESET_USER_DATA:
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        userID: '',
        isMember: false,
        isAdmin: false,
      };
    default:
      return state;
  }
};

export default userReducer;

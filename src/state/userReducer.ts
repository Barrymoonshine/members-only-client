import { USER_ACTIONS } from '../utils/ACTIONS';
import { UserState, UserAction } from '../types/userTypes';

export const initialState: UserState = {
  isLoggedIn: false,
  isMember: false,
  isAdmin: false,
  isLoading: false,
  logInError: null,
};

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case USER_ACTIONS.TOGGLE_LOG_IN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case USER_ACTIONS.SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: true,
      };
    case USER_ACTIONS.SET_IS_MEMBER:
      return {
        ...state,
        isMember: true,
      };
    case USER_ACTIONS.SAVE_LOG_IN_ERROR:
      return {
        ...state,
        logInError: action.payload.error,
      };
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
    default:
      return state;
  }
};

export default userReducer;

import ACTIONS from '../utils/ACTIONS';

export type UserState = {
  isLoggedIn: boolean;
  isMember: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  logInError: string[] | { message: string; code: number } | null;
};

export const initialState: UserState = {
  isLoggedIn: false,
  isMember: false,
  isAdmin: false,
  isLoading: false,
  logInError: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
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
        logInError: payload.error,
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
    default:
      return state;
  }
};

export default userReducer;

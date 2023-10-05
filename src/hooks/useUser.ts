import { useReducer } from 'react';
import userReducer, { initialState } from '../state/userReducer';
import { UserState, UserAction } from '../types/userTypes';

const useUser = () => {
  const [state, dispatch] = useReducer<React.Reducer<UserState, UserAction>>(
    userReducer,
    initialState
  );

  return {
    state,
    dispatch,
  };
};

export default useUser;

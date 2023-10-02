import { useReducer } from 'react';
import userReducer, { initialState } from '../state/userReducer';

const useUser = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useUser;

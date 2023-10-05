import { useReducer } from 'react';
import userReducer, { initialState } from '../state/userReducer';

const useUser = () => {
  const [state, dispatch] = useReducer<any>(userReducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useUser;

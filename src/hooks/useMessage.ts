import { useReducer } from 'react';
import messageReducer, { initialState } from '../state/messageReducer';

const useMessage = () => {
  const [state, dispatch] = useReducer(messageReducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useMessage;
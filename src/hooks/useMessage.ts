import { useReducer } from 'react';
import messageReducer, { initialState } from '../state/messageReducer';
import { MessageState, MessageAction } from '../types/messageTypes';

const useMessage = () => {
  const [state, dispatch] = useReducer<
    React.Reducer<MessageState, MessageAction>
  >(messageReducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useMessage;

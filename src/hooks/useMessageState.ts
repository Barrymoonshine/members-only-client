import { useContext } from 'react';
import { MessageContext } from '../context/MessageContext';

const useMessageState = () => {
  const messageContext = useContext(MessageContext);
  // Ensure messageContext is available prior to returning state
  if (!messageContext) {
    throw new Error('useMessageState must be used within UserProvider');
  } else {
    return {
      messages: messageContext.state.messages,
      messagesError: messageContext.state.messagesError,
      messagesLoading: messageContext.state.messagesLoading,
    };
  }
};

export default useMessageState;

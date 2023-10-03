import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useUserState = () => {
  const userContext = useContext(UserContext);
  // Ensure userContext is available prior to returning state
  if (!userContext) {
    throw new Error('useUserState must be used within UserProvider');
  } else {
    return {
      isLoggedIn: userContext.state.isLoggedIn,
      isMember: userContext.state.isMember,
      isAdmin: userContext.state.isAdmin,
      isLoading: userContext.state.isLoading,
      logInError: userContext.state.logInError,
      messages: userContext.state.messages,
      messagesError: userContext.state.messagesError,
      messagesLoading: userContext.state.messagesLoading,
    };
  }
};

export default useUserState;

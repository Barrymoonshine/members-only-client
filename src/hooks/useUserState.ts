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
      userID: userContext.state.userID,
      isMember: userContext.state.isMember,
      isAdmin: userContext.state.isAdmin,
      isLoading: userContext.state.isLoading,
      logInError: userContext.state.logInError,
      signUpError: userContext.state.signUpError,
      joinUsError: userContext.state.joinUsError,
    };
  }
};

export default useUserState;

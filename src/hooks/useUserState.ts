import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useUserState = () => {
  const userContext = useContext(UserContext);

  // Ensure userContext is available prior to returning state
  if (userContext !== undefined) {
    return {
      isLoggedIn: userContext.state.isLoggedIn,
      isMember: userContext.state.isMember,
      isAdmin: userContext.state.isAdmin,
      isLoading: userContext.state.isLoading,
      logInError: userContext.state.logInError,
    };
  }
};

export default useUserState;

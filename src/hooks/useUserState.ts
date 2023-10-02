import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useUserState = () => {
  const { state } = useContext(UserContext);

  return {
    isLoggedIn: state.isLoggedIn,
    isMember: state.isMember,
    isAdmin: state.isAdmin,
  };
};

export default useUserState;

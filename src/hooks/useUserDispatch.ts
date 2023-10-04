import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { USER_ACTIONS } from '../utils/ACTIONS';
import { LogInFormTypes } from '../components/LogIn/LogIn';
import { AuthError } from '../types/userTypes';
import { ResError } from '../types/messageTypes';

const useUserDispatch = () => {
  const userContext = useContext(UserContext);
  // Ensure userContext is available prior to returning dispatch functions
  if (!userContext) {
    throw new Error('useUserDispatch must be used within UserProvider');
  }
  const { dispatch } = userContext;

  const toggleLoading = () => {
    dispatch({
      type: USER_ACTIONS.TOGGLE_LOADING,
    });
  };

  const toggleLogIn = () => {
    dispatch({
      type: USER_ACTIONS.TOGGLE_LOG_IN,
    });
  };

  const setAdminStatus = () => {
    dispatch({
      type: USER_ACTIONS.SET_IS_ADMIN,
    });
  };

  const setMemberStatus = () => {
    dispatch({
      type: USER_ACTIONS.SET_IS_MEMBER,
    });
  };

  const removeLogInError = () => {
    dispatch({
      type: USER_ACTIONS.REMOVE_LOG_IN_ERROR,
    });
  };

  const saveLogInError = (error: AuthError) => {
    dispatch({
      type: USER_ACTIONS.SAVE_LOG_IN_ERROR,
      payload: { error },
    });
  };

  const handleLogIn = async (formData: LogInFormTypes) => {
    try {
      removeLogInError();
      toggleLoading();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        data.isAdmin && setAdminStatus();
        data.isMember && setMemberStatus();
        toggleLogIn();
        toggleLoading();
        return true;
      } else {
        saveLogInError('Invalid username or password');
        toggleLoading();
        return false;
      }
    } catch (error) {
      saveLogInError(error as ResError);
      toggleLoading();
      return false;
    }
  };

  return {
    handleLogIn,
    removeLogInError,
  };
};

export default useUserDispatch;

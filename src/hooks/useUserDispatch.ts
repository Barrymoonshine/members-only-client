import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import ACTIONS from '../utils/ACTIONS';
import { LogInFormTypes } from '../components/LogIn/LogIn';

type LogInError = string[] | { message: string; code: number };

const useUserDispatch = () => {
  const { dispatch } = useContext(UserContext);

  const toggleLoading = () => {
    dispatch({
      type: ACTIONS.TOGGLE_LOADING,
    });
  };

  const toggleLogIn = () => {
    dispatch({
      type: ACTIONS.TOGGLE_LOG_IN,
    });
  };

  const setAdminStatus = () => {
    dispatch({
      type: ACTIONS.SET_IS_ADMIN,
    });
  };

  const setMemberStatus = () => {
    dispatch({
      type: ACTIONS.SET_IS_MEMBER,
    });
  };

  const removeLogInError = () => {
    dispatch({
      type: ACTIONS.REMOVE_LOG_IN_ERROR,
    });
  };

  const saveLogInError = (error: LogInError) => {
    dispatch({
      type: ACTIONS.SAVE_LOG_IN_ERROR,
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
        saveLogInError(data);
        toggleLoading();
        return false;
      }
    } catch (error) {
      saveLogInError(error as LogInError);
      toggleLoading();
      return false;
    }
  };

  return {
    handleLogIn,
  };
};

export default useUserDispatch;

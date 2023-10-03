import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import ACTIONS from '../utils/ACTIONS';
import { LogInFormTypes } from '../components/LogIn/LogIn';
import { AuthError, ResError, Message } from '../state/reducerTypes';

const useUserDispatch = () => {
  const userContext = useContext(UserContext);
  // Ensure userContext is available prior to returning dispatch functions
  if (!userContext) {
    throw new Error('useUserDispatch must be used within UserProvider');
  }
  const { dispatch } = userContext;

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

  const saveLogInError = (error: AuthError) => {
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

  const saveMessages = (messages: Message[]) => {
    dispatch({
      type: ACTIONS.SAVE_MESSAGES,
      payload: { messages },
    });
  };

  const removeMessagesError = () => {
    dispatch({
      type: ACTIONS.REMOVE_MESSAGES_ERROR,
    });
  };

  const saveMessagesError = (error: ResError) => {
    dispatch({
      type: ACTIONS.SAVE_MESSAGES_ERROR,
      payload: { error },
    });
  };

  const toggleMessagesLoading = () => {
    dispatch({
      type: ACTIONS.TOGGLE_MESSAGES_LOADING,
    });
  };

  const getMessages = async () => {
    try {
      removeMessagesError();
      toggleMessagesLoading();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/message`, {
        method: 'GET',
      });
      const data = await response.json();
      if (response.ok) {
        saveMessages(data);
        return true;
      } else {
        saveMessagesError(data);
      }
    } catch (error) {
      saveMessagesError(error as ResError);
    } finally {
      toggleMessagesLoading();
    }
  };

  return {
    handleLogIn,
    getMessages,
  };
};

export default useUserDispatch;

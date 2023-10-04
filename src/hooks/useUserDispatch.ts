import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { USER_ACTIONS } from '../utils/ACTIONS';
import { LogInFormTypes } from '../components/LogIn/LogIn';
import { ResError, ValidatorError } from '../types/messageTypes';
import { SignUpFormTypes } from '../pages/SignUp/SignUp';
import { JoinUsFormTypes } from '../page/JoinUs/JoinUs';

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

  const saveLogInError = (error: ResError) => {
    dispatch({
      type: USER_ACTIONS.SAVE_LOG_IN_ERROR,
      payload: { error },
    });
  };

  const saveUserID = (id: string) => {
    dispatch({
      type: USER_ACTIONS.SAVE_USER_ID,
      payload: { id },
    });
  };

  const saveUsername = (username: string) => {
    dispatch({
      type: USER_ACTIONS.SAVE_USERNAME,
      payload: { username },
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
        saveUserID(data._id);
        saveUsername(data.username);
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

  const removeSignUpError = () => {
    dispatch({
      type: USER_ACTIONS.REMOVE_SIGN_UP_ERROR,
    });
  };

  const saveSignUpError = (error: ResError | ValidatorError[]) => {
    dispatch({
      type: USER_ACTIONS.SAVE_SIGN_UP_ERROR,
      payload: { error },
    });
  };

  const handleSignUp = async (formData: SignUpFormTypes) => {
    try {
      removeSignUpError();
      toggleLoading();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/new`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        data.isAdmin && setAdminStatus();
        saveUserID(data._id);
        saveUsername(data.username);
        toggleLogIn();
        toggleLoading();
        return true;
      } else {
        saveSignUpError(data);
        toggleLoading();
        return false;
      }
    } catch (error) {
      saveSignUpError(error as ResError);
      toggleLoading();
      return false;
    }
  };

  const removeJoinUsError = () => {
    dispatch({
      type: USER_ACTIONS.REMOVE_JOIN_US_ERROR,
    });
  };

  const saveMemberError = (error: ResError | ValidatorError[]) => {
    dispatch({
      type: USER_ACTIONS.SAVE_JOIN_US_ERROR,
      payload: { error },
    });
  };

  const handleJoinUs = async (formData: JoinUsFormTypes, id: string) => {
    try {
      removeJoinUsError();
      toggleLoading();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
        method: 'PATCH',
        body: JSON.stringify({ ...formData, id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        setMemberStatus();
        toggleLoading();
        return true;
      } else {
        saveMemberError(data);
        toggleLoading();
        return false;
      }
    } catch (error) {
      saveMemberError(error as ResError);
      toggleLoading();
      return false;
    }
  };

  const handleLogOut = () => {
    toggleLogIn();
    saveUserID('');
    saveUsername('');
  };

  return {
    handleLogIn,
    removeLogInError,
    handleSignUp,
    handleJoinUs,
    handleLogOut,
  };
};

export default useUserDispatch;

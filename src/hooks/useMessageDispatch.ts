import { useContext } from 'react';
import { MessageContext } from '../context/MessageContext';
import { MESSAGE_ACTIONS } from '../utils/ACTIONS';
import { ValidatorError, ResError, Message } from '../types/messageTypes';
import { CreateFormTypes } from '../pages/create/Create';

const useMessageDispatch = () => {
  const messageContext = useContext(MessageContext);
  // Ensure messageContext is available prior to returning dispatch functions
  if (!messageContext) {
    throw new Error('useUserDispatch must be used within UserProvider');
  }
  const { state, dispatch } = messageContext;

  const saveMessages = (messages: Message[]) => {
    dispatch({
      type: MESSAGE_ACTIONS.SAVE_MESSAGES,
      payload: { messages },
    });
  };

  const removeMessagesError = () => {
    dispatch({
      type: MESSAGE_ACTIONS.REMOVE_MESSAGES_ERROR,
    });
  };

  const saveMessagesError = (error: ResError) => {
    dispatch({
      type: MESSAGE_ACTIONS.SAVE_MESSAGES_ERROR,
      payload: { error },
    });
  };

  const toggleMessagesLoading = () => {
    dispatch({
      type: MESSAGE_ACTIONS.TOGGLE_MESSAGES_LOADING,
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

  const removeCreateError = () => {
    dispatch({
      type: MESSAGE_ACTIONS.REMOVE_CREATE_ERROR,
    });
  };

  const saveCreateError = (error: ValidatorError | ResError) => {
    dispatch({
      type: MESSAGE_ACTIONS.REMOVE_CREATE_ERROR,
      payload: { error },
    });
  };

  const handleCreateMessage = async (
    formData: CreateFormTypes,
    username: string
  ) => {
    try {
      removeCreateError();
      toggleMessagesLoading();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/message`, {
        method: 'POST',
        body: JSON.stringify({ ...formData, username }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        saveMessages(data);
        return true;
      } else {
        saveCreateError(data);
      }
    } catch (error) {
      saveCreateError(error as ResError);
    } finally {
      toggleMessagesLoading();
    }
  };

  return {
    getMessages,
    handleCreateMessage,
  };
};

export default useMessageDispatch;

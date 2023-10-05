import { createContext, ReactNode } from 'react';
import useMessage from '../hooks/useMessage';
import { MessageState, MessageAction } from '../types/messageTypes';

type MessageContextValue = {
  state: MessageState;
  dispatch: (action: MessageAction) => void;
};

type MessageProviderProps = {
  children: ReactNode;
};

// Initialise with undefined as not all components may have access to the context
// Although due to architecture, all components and pages have access in this app
export const MessageContext = createContext<MessageContextValue | undefined>(
  undefined
);

export const MessageProvider = ({ children }: MessageProviderProps) => {
  // Deconstruct useUser and assign with the correct useContext types
  const { state, dispatch } = useMessage();
  const userContextValue: MessageContextValue = { state, dispatch };

  return (
    <MessageContext.Provider value={userContextValue}>
      {children}
    </MessageContext.Provider>
  );
};

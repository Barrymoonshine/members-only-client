import { createContext, ReactNode } from 'react';
import useUser from '../hooks/useUser';
import { UserState, UserAction } from '../state/reducerTypes';

type UserContextValue = {
  state: UserState;
  dispatch: (action: UserAction) => void;
};

type UserProviderProps = {
  children: ReactNode;
};

// Initialise with undefined as not all components have access to the context
export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export const UserProvider = ({ children }: UserProviderProps) => {
  // Deconstruct useUser and assign with the correct useContext types
  const { state, dispatch } = useUser();
  const userContextValue: UserContextValue = { state, dispatch };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

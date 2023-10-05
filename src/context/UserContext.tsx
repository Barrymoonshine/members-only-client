import { createContext, ReactNode } from 'react';
import useUser from '../hooks/useUser';
import { UserState, UserAction } from '../types/userTypes';

type UserContextValue = {
  state: UserState;
  dispatch: (action: UserAction) => void;
};

type UserProviderProps = {
  children: ReactNode;
};

// Initialise with undefined as not all components may have access to the context
// Although due to architecture, all components and pages have access in this app
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

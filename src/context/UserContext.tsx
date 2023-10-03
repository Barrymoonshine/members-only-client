import { createContext, ReactNode } from 'react';
import useUser from '../hooks/useUser';

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={useUser()}>{children}</UserContext.Provider>
  );
};

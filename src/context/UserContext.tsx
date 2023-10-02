import { createContext } from 'react';
import useUser from '../hooks/useUser';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={useUser()}>{children}</UserContext.Provider>
  );
};

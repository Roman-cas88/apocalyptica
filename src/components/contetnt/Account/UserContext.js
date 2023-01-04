import React, { createContext } from 'react'
import { isAuthenticated } from './Authentication'

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    return (
      <UserContext.Provider value={isAuthenticated()}>
        {children}
      </UserContext.Provider>
    );
  };



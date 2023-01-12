import React, { useState,createContext, useContext, useEffect } from 'react'

const isAuthenticated = () => {
    const userLocaleStore = localStorage.getItem('user');
    if (!userLocaleStore) {
        return null
    }
    const value = JSON.parse(userLocaleStore).firstName
    return value;
};


const setLocaleStorage = (data) => { localStorage.setItem('user', JSON.stringify(data))};

const removeLocaleStorage = () => { localStorage.removeItem('user') };

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [nameAccount, setNameAccount ] = useState(isAuthenticated());
    const logout = () => {
        removeLocaleStorage();
        setNameAccount(null)
      };
    const login = (data) => {
         localStorage.setItem('user', JSON.stringify(data))
         setNameAccount(isAuthenticated())
    };

   

    const [checkRegister, setCheckRegister] = useState(false)
    

  useEffect(() => {
    const isRegister = () => {
      if (nameAccount !== null) {
          setCheckRegister(true)
      }
      else {setCheckRegister(false)} 
  }
    isRegister()
  }, [nameAccount])

    return (
      <UserContext.Provider value={{ nameAccount, logout, login, checkRegister }}>
        {children}
      </UserContext.Provider>
    );
  };

  


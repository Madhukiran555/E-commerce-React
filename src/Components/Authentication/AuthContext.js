
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const existing = JSON.parse(localStorage.getItem('loggedInUser'));
  const [user, setUser] = useState(existing || null);

  const login = (userData) => {
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
    setUser(userData);
  };

  const signup = (newUser) => {
    localStorage.setItem('registeredUser', JSON.stringify(newUser));
    login(newUser);
  };

  const loginAsGuest = () => {
    const guest = { name: 'Guest', guest: true };
    login(guest);
  };

  const logout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loginAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

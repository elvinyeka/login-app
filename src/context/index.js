import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [showPass, setShowPass] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const state = {
    showPass,
    setShowPass,
    isLogin,
    setIsLogin,
  };
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

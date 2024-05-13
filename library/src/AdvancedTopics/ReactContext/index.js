import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const getAppContext = ()=> useContext(AppContext);

export const ContextProvider = ({ children, variables }) =>{
  const [ contextData, updateContextData ] = useState(variables);
  const setContextData = (data) => {
    updateContextData({ ...contextData, ...data } );
  };
  return (
    <AppContext.Provider value={{ contextData, setContextData }}>
     {children}
    </AppContext.Provider>
  );
}
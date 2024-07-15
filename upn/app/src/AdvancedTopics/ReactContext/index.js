import React, { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const getAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children, variables }) =>{
 const [contextData, updatedContextData ] = useState(variables || {} );
 const setContextData = (data) =>{
    updatedContextData({...contextData, ...data });
 };
 return (<AppContext.Provider value={{ contextData, setContextData }}>
  {children}
 </AppContext.Provider>);
};

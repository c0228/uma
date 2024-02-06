import React, { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext();

export const getAppContext = ()=> useContext(AppContext);

export const ContextProvider = ({ children, variables }) =>{
  const [ contextData, updateContextData ] = useState(variables);
  useEffect(()=>{
    console.log("contextData [contextData]: "+ JSON.stringify(contextData));
  },[contextData]);
  const setContextData = (data) => {
    updateContextData({ ...contextData, ...data } );
  };
  const deleteContextData = (key) => {
    updateContextData((prevContextData) => {
      const updatedData = { ...prevContextData };
  
      // Delete the specified key from the copy
      if (updatedData.hasOwnProperty(key)) {
        delete updatedData[key];
      }
  
      console.log("updatedData[AfterDelete]: " + JSON.stringify(updatedData));
  
      return updatedData;
    });
  };
  return (
    <AppContext.Provider value={{ contextData, setContextData, deleteContextData }}>
     {children}
    </AppContext.Provider>
  );
}
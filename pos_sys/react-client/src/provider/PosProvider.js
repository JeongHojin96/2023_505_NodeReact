import React, { createContext, useState, useContext } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [someData, setSomeData] = useState("Initial Value");

  const updateData = (newValue) => {
    setSomeData(newValue);
  };

  return (
    <MyContext.Provider value={{ someData, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

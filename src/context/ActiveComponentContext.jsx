import { createContext, useContext, useState } from 'react';

const ActiveComponentContext = createContext();

export const ActiveComponentProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('discovery');
  return (
    <ActiveComponentContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </ActiveComponentContext.Provider>
  );
};

export const useActiveComponent = () => useContext(ActiveComponentContext);

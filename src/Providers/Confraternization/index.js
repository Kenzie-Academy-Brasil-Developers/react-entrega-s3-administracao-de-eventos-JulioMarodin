import { createContext, useState } from 'react';

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [confraternizationList, setConfraternizationList] = useState([]);

  const addToConfraternization = (item) => {
    setConfraternizationList([...confraternizationList, item]);
  };

  const removeFromConfraternization = (item) => {
    const newArray = confraternizationList.filter(
      (beer) => beer.id !== item.id
    );
    setConfraternizationList(newArray);
  };

  return (
    <ConfraternizationContext.Provider
      value={{
        confraternizationList,
        addToConfraternization,
        removeFromConfraternization,
      }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};

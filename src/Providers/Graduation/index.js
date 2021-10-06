import { createContext, useState } from 'react';

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [graduationList, setGraduationList] = useState([]);

  const addToGraduation = (item) => {
    setGraduationList([...graduationList, item]);
  };

  const removeFromGraduation = (item) => {
    const newArray = graduationList.filter((beer) => beer.id !== item.id);
    setGraduationList(newArray);
  };

  return (
    <GraduationContext.Provider
      value={{
        graduationList,
        addToGraduation,
        removeFromGraduation,
      }}
    >
      {children}
    </GraduationContext.Provider>
  );
};

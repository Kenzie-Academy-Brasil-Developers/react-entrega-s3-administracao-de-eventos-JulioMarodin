import { createContext, useState } from 'react';

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addToWedding = (item) => {
    setWeddingList([...weddingList, item]);
  };

  const removeFromWedding = (item) => {
    const newArray = weddingList.filter((beer) => beer.id !== item.id);
    setWeddingList(newArray);
  };

  return (
    <WeddingContext.Provider
      value={{
        weddingList,
        addToWedding,
        removeFromWedding,
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
};

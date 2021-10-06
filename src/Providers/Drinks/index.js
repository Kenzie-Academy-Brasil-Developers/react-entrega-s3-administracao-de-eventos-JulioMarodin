import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DrinkContext = createContext([]);

export const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = () => {
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then((res) => setDrinks(res.data));
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <DrinkContext.Provider value={{ drinks, setDrinks }}>
      {children}
    </DrinkContext.Provider>
  );
};

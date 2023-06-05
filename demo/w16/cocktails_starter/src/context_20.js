import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext_20 = React.createContext();

const AppProvider_20 = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails,setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try{
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log('drink',data);
      const {drinks} = data;

      if(drinks){
        const newCocktails = drinks.map((item) => {
          const {idDrink,strAlcoholic,strDrink,strDrinkThumb,strGlass} = item;
          return{
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass,
          }
        })
        setCocktails(newCocktails);
      }else{
        setCocktails([]);
      }
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDrinks();
  },[searchTerm])

  return (
    <AppContext_20.Provider value={{loading, cocktails,setSearchTerm,searchTerm}}>{children}</AppContext_20.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext_20);
};

export { AppContext_20, AppProvider_20 };

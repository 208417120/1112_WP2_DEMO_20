import React, { useState, useContext, useReducer, useEffect } from 'react';
import Reducer_20 from './Reducer_20';

// import cartItems from './data-0'

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext_20 = React.createContext();

const initialState = {
   loading: false,
   cart: [],
   amount: 4,
   total: 999.9
}

const AppProvider_20 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_20, initialState);

  useEffect(()=>{
    dispatch({ type: 'GET_TOTALS'});
  },[state.cart]);

  const clearCart = () => {
     dispatch({ type: 'CLEAR_CART' });
  }
  const increase = (id) => {
     dispatch({ type: 'INCREASE', payload: id });
  } 
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
 } 

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id});
  }

  const fetchData = async () => {
     dispatch({ type: 'LOADING'});
     const response = await fetch(url);
     const cart = await response.json();
     console.log('cart', cart);
     dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  }

  useEffect(()=>{
    fetchData();
  }, []);

return <AppContext_20.Provider value={{...state, clearCart, increase, decrease, remove}}>
     {children}
  </AppContext_20.Provider>
};

const useGlobalContext_20 = () => {
  return useContext(AppContext_20);
}

export { AppProvider_20, useGlobalContext_20};

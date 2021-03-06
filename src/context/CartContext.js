import React, { createContext, useReducer, useEffect } from "react";
import CartReducer from '../reducers/CartReducer';
const initialState = {
  cartTransaction: JSON.parse(localStorage.getItem("cartTransaction"))||[],
  cartSavedForLater: JSON.parse(localStorage.getItem("cartSavedForLater"))||[]


};

export const GlobalCartContext=createContext(initialState);

export const GlobalCartContextProvider=({children})=>{
    const [state, dispatch]=useReducer(CartReducer,initialState)
    useEffect(()=>{
      localStorage.setItem("cartTransaction", JSON.stringify(state.cartTransaction));
      localStorage.setItem("cartSavedForLater", JSON.stringify(state.cartSavedForLater))
    });
    

   

    const saveItemforLater=(savedItem)=>{
      dispatch({
        type: "SAVE_ITEM_FOR_LATER",
        payload: savedItem,
      });
    };
    const removeItemFromSavedForLater=(id)=>{
      dispatch({
        type: "REMOVE_FROM_SAVED_FOR_LATER",
        payload: id,
      });
    };
    const addItemTocart=(cartItem)=>{
      dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: cartItem,
      }

      );
    };

    const removeItemFromCart=(id)=>{
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: id,

      })
    }
    return(
        <GlobalCartContext.Provider value={{
            cartTransaction: state.cartTransaction,
            cartSavedForLater:state.cartSavedForLater,
            addItemTocart,
            removeItemFromCart,
            saveItemforLater,
            removeItemFromSavedForLater
        }}>
        {children}
        </GlobalCartContext.Provider>
    );
}

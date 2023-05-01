import product from '@/sanity_ecommerce/schemas/product';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);


const addTO=(product,quantity)=>{
  const checkProductInCart = cartItems.find((item) => item._id === product._id);
    

    
    setTotalQuantities((prevQty)=>{ prevQty+qty})
    setTotalPrice((prevPrice)=>{prevPrice+product.price*quantity})
    if(checkProductInCart){
        const updatedCartItems=cartItems.map((cartProduct)=>{
            if(cartProduct._id===product._id)return {
                ... cartProduct,
                quantity: cartProduct.qty+quantity
            }
        })
        setCartItems(updatedCartItems);
    }else{
        setCartItems([
            ...cartItems,{...product}]
        )
    }

}
 const incQty=()=>{
      setQty((prevQty)=>{
             return prevQty+1;
      });
 }

 const decQty=()=>{
    setQty((prevQty)=>{
           return prevQty-1;
    });
}
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);
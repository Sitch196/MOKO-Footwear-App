// CartContext.tsx

import React, { createContext, useState } from "react";

interface Item {
  id: number;
  brand: string;
  img_url: string;
  size: string;
  price: string;
}
interface incre {
  item: Number;
}
interface ContextType {
  cartItems: Item[];
  addToCart: (item: Item) => void;
  setCartItems: (items: Item[]) => void;
}

export const CartContext = createContext<ContextType>({
  cartItems: [],
  addToCart: () => {},
  setCartItems: () => {},
});

export const CartProvider: any = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

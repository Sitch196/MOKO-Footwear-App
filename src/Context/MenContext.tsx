// CartContext.tsx

import React, { createContext, useState } from "react";

interface Item {
  id: number;
  brand: string;
  img_url: string;
  size: number;
  price: number;
}

interface ContextType {
  cartItems: Item[];
  addToCart: (item: Item) => void;
}

export const CartContext = createContext<ContextType>({
  cartItems: [],
  addToCart: () => {},
});

export const CartProvider: React.FC = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};


// create a context
// use the context value 
// update the context value
// provide the context value

import { createContext } from "react";

const CartContext = createContext({
  cart: {},
  addToCart: () => { },
  removeFromCart: () => {}
});

export default CartContext;

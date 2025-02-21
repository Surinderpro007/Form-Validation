
import { useContext } from "react";
import CartContext from "../../context/CardContext";
function AddToCart({item}) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  function increase() {
    console.log("increase called");
    addToCart(item);
  }

  function decrease() {
    removeFromCart(item);
  }

  const quantity = cart[item.id] ? cart[item.id].quantity : 0;
  // state for cart

  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>
          Add To Cart
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={decrease}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increase}>
          +
        </button>
      </div>
    )
  }

}

export default AddToCart;

// useContext(context) 
// values

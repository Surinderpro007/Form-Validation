
import { useContext } from "react";
import CartContext from "../../context/CardContext";
function FullCart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div>
      {Object.values(cart).map((c) => {
        return (
        <div className="card">
          <h2>{c.title}</h2>
          <h2>{c.quantity}</h2>
        </div>)
      })}
    </div>
    )
  }
  
export default FullCart;

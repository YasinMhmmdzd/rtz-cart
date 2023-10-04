import CartItem from "./CartItem/CartItem"
import "./Cart.css"
function Cart() {
  return (
    <div className="cart">
      <h3>Cart</h3>

      <div className="cart-container">
        <CartItem />  
      </div>
    </div>
  )
}

export default Cart
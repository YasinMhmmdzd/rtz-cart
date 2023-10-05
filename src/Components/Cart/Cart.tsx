import CartItem from "./CartItem/CartItem"
import "./Cart.css"
import useProductsStore from "../../Utils/Store/ProductStore"

function Cart() {

  const cart = useProductsStore((state) => state.cartState)

  return (
    <div className="cart">
      <h3>Cart</h3>

      <div className="cart-container">
        {cart.map((cartProduct) => (

        <CartItem {...cartProduct}/>

        ))}
      </div>
    </div>
  )
}

export default Cart
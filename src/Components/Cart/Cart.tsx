import CartItem from "./CartItem/CartItem"
import "./Cart.css"
import useProductsStore from "../../Utils/Store/ProductStore"

function Cart() {

  const cart = useProductsStore((state) => state.cartState)

  let sum = 0

  for(let i=0; i<cart.length;i++){
    sum += Number(cart[i].price)
  }

  return (
    <div className="cart">
      <h3>Cart : {sum}</h3>

      <div className="cart-container">
        {cart.map((cartProduct) => (

        <CartItem {...cartProduct}/>

        ))}
      </div>
    </div>
  )
}

export default Cart
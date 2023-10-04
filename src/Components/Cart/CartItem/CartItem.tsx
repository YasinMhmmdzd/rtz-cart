import {BsCurrencyDollar} from "react-icons/bs"
import {AiFillDelete} from 'react-icons/ai'

import "./CartItem.css"

function CartItem() {
  return (
    <div className="cart-item">
        <div className="cart-product">

        <h3>Mac Book</h3>

        <p>
        <BsCurrencyDollar />200.00
        </p>
        </div>

        <p>
            <AiFillDelete className="cart-delete-icon"/>
        </p>

    </div>
  )
}

export default CartItem
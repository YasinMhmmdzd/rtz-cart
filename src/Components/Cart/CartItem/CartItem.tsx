import {BsCurrencyDollar} from "react-icons/bs"
import {AiFillDelete} from 'react-icons/ai'

import "./CartItem.css"

function CartItem(props:{id:string , title:string , price:string}) {
  return (
    <div className="cart-item">
        <div className="cart-product">

        <h3>{props.title}</h3>

        <p>
        <BsCurrencyDollar />{props.price}
        </p>
        </div>

        <p>
            <AiFillDelete className="cart-delete-icon"/>
        </p>

    </div>
  )
}

export default CartItem
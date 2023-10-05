import {BsCurrencyDollar} from "react-icons/bs"
import {AiFillDelete} from 'react-icons/ai'

import "./CartItem.css"
import useProductsStore from "../../../Utils/Store/ProductStore"

function CartItem(props:{id:string , title:string , price:string}) {

  const deleteFunc = useProductsStore((state) => state.deleteCart)

  const deleteCart = () =>{
    deleteFunc(props.id)
  }

  return (
    <div className="cart-item">
        <div className="cart-product">

        <h3>{props.title}</h3>

        <p>
        <BsCurrencyDollar />{props.price}
        </p>
        </div>

        <p onClick={deleteCart}>
            <AiFillDelete className="cart-delete-icon"/>
        </p>

    </div>
  )
}

export default CartItem
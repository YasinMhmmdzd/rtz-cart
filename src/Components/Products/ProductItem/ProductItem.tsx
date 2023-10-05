import {BsCurrencyDollar} from "react-icons/bs"
import "./ProductItem.css"

function ProductItem(props:{title:string , price:string}) {
  return (
    <div className="product-item">

        <img src="./images/product.jpeg" />

        <h5>{props.title}</h5>

        <p>
            <BsCurrencyDollar />{props.price}
        </p>

    </div>
  )
}

export default ProductItem
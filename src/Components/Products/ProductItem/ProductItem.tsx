import {BsCurrencyDollar} from "react-icons/bs"
import "./ProductItem.css"

function ProductItem() {
  return (
    <div className="product-item">

        <img src="./images/product.jpeg" />

        <h5>Mac Book Pro</h5>

        <p>
            <BsCurrencyDollar />200.00
        </p>

    </div>
  )
}

export default ProductItem
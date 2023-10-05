import {BsCurrencyDollar} from "react-icons/bs"
import "./ProductItem.css"
import useProductsStore from "../../../Utils/Store/ProductStore"

function ProductItem(props:{id:string , title:string , price:string}) {

  const addToCartFunc = useProductsStore((state) => state.addToCart)

  const addToCart = () =>{
    addToCartFunc({id:props.id , title : props.title , price: props.price})
  }

  return (
    <div onClick={addToCart} className="product-item">

        <img src="./images/product.jpeg" />

        <h5>{props.title}</h5>

        <p>
            <BsCurrencyDollar />{props.price}
        </p>

    </div>
  )
}

export default ProductItem
import "./Product.css"
import ProductItem from "./ProductItem/ProductItem"
import useProductsStore from "../../Utils/Store/ProductStore"

function Products() {

  const products = useProductsStore((state) => state.cartState)

  console.log(products);
  

  return (
    <div className="products">


      <h4>Products</h4>

      <div className="products-container">
        {
          products.map((product) => (
            <ProductItem {...product}/>
          ))
        }
      </div>

    </div>
  )
}

export default Products
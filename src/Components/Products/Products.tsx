import "./Product.css"
import ProductItem from "./ProductItem/ProductItem"


function Products() {
  return (
    <div className="products">


      <h4>Products</h4>

      <div className="products-container">
        <ProductItem />
      </div>

    </div>
  )
}

export default Products
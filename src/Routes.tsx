import AddProduct from "./Components/AddProduct/AddProduct"
import Cart from "./Components/Cart/Cart"
import Products from "./Components/Products/Products"

let router = [
    {
        path:"/" , element:<Products />
    },
    {
        path:"/add" , element:<AddProduct />
    },
    {
        path:"/cart" , element:<Cart />
    }
]

export default router
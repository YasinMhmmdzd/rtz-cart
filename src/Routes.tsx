import AddProduct from "./Components/AddProduct/AddProduct"
import Products from "./Components/Products/Products"

let router = [
    {
        path:"/" , element:<Products />
    },
    {
        path:"/add" , element:<AddProduct />
    }
]

export default router
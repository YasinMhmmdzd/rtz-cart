import "./AddProduct.css"

import useProductsStore from "../../Utils/Store/ProductStore"
import { useState } from "react"

function AddProduct(){

    const addProductFunc = useProductsStore((state) => state.addProduct)
    const [productTitle , setProductTitle] = useState('')
    const [productPrice , setProdcutPrice] = useState('')
    const [status , setStatus] = useState('') 
    

    const addProduct = (e:Event) =>{
        e.preventDefault();
        addProductFunc({id:"1" , title:productTitle , price:productPrice})

        setProductTitle("")
        setProdcutPrice("")
        setStatus("success")
    }

    return(

        <div className="add-product">
            <h3>
                Add new product
            </h3>

            <form className="add-product-form" onSubmit={addProduct}>

                <input type="text" value={productTitle} onChange={(e)=> setProductTitle(e.target.value)} placeholder="Product title"/>
                <input type="text" value={productPrice} onChange={(e)=> setProdcutPrice(e.target.value)} placeholder="product price"/>
                <button type="submit">Add</button>
                {
                    status === "success" && (
                        <p style={{color:'green'}}>Product Added successfull :)</p>
                    )
                }

            </form>
        </div>
    )

}


export default AddProduct
import "./AddProduct.css"

function AddProduct(){

    return(

        <div className="add-product">
            <h3>
                Add new product
            </h3>

            <form>

                <input type="text" placeholder="Product title"/>
                <input type="text" placeholder="product price"/>
                <button type="submit">Add</button>

            </form>
        </div>
    )

}


export default AddProduct
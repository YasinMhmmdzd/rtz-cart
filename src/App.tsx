import { Link, useRoutes } from "react-router-dom"
import {AiOutlineShoppingCart , AiOutlinePlus , AiOutlineUnorderedList} from "react-icons/ai"
import router from "./Routes"
import "./App.css"

function App() {

  let routing = useRoutes(router)

  return (
   
    <div className="app">
      <div className="app-header">
        RTZ cart
      </div>

      
      {routing}


      <div className="app-footer">
        <Link to="/"><AiOutlineUnorderedList className="app-footer-icon "/></Link>
        <Link to="/"><AiOutlinePlus className="app-footer-icon "/></Link>
        <Link to="/"><AiOutlineShoppingCart className="app-footer-icon"/></Link>
      </div>

    </div>

  )
}

export default App

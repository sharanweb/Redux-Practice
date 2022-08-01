import { Routes, Route } from "react-router-dom"
import { ProductDetails } from "../Components/prodDetail"
import { ProductList } from "../Components/productList"

export const Allroutes = ()=>{

    return (
        <div>
            <Routes>
                <Route path="/" element={<ProductList></ProductList>}></Route>
                <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}></Route>
                <Route>404 not found</Route>
            </Routes>
        </div>

    )
}
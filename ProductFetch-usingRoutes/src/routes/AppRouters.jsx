import Home from "../components/Home";
import MainPage from "../pages/MainPage";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
function AppRouters(){
    return(
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
    )
}
export default AppRouters;
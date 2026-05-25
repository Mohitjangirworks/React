import { Route, Routes } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import About from "../Pages/About";
import Carrier from "../Pages/Carrier";
import Home from "../Pages/Home";

function AppRouters(){
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/carrier' element={<Carrier/>}/>
            {/* <Route path="/products" element={<ProductPage/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/> */}
        </Routes>
    )
}
export default AppRouters;
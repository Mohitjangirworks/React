import Home from "../components/Home";
import DashboardDevSecurity from "../pages/DashboardDevSecurity";
import DashboardPage from "../pages/DashboardPage";
import DashboardSecurity from "../pages/DashboardSecurity";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
function AppRouters(){
    return(
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>\
            // Nested Routing
            <Route path="/dashboard" element={<DashboardPage/>}>
                <Route index path="security" element={<DashboardSecurity/>}/>
                <Route path="devsecurity" element={<DashboardDevSecurity/>}/>
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}
export default AppRouters;
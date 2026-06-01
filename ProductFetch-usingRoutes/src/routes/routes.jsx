import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Home from "../components/Home";

export const router = createBrowserRouter([
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/",
        element: <MainPage/>
    }

])


import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <NavLink to={"/product"}>Product Page</NavLink>
            <br />
            <NavLink to={"/home"}>Home</NavLink>
            <br />
            <NavLink to={"/dashboard"}>Dashboard Page</NavLink>
        </nav>
    )
}
export default Navbar;
import {Outlet} from 'react-router-dom'
import { Link } from "react-router-dom";
function DashboardPage() {
    return (
        <>
            <h1>Dashboard Page</h1>
            <nav>
                <Link to="security">Security</Link>
                <br/>
                 <Link to="devsecurity">Dev Security</Link>
            </nav>

            <Outlet/>
        </>
    )
}
export default DashboardPage;
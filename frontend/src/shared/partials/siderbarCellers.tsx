import { NavLink } from "react-router-dom";
function SiderbarCellers() {

    return (
        <>
            <div>
                <ul>
                    <li>
                        <NavLink to="/cellers/dashboard">dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cellers/products">quản lí sản phẩm</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default SiderbarCellers;
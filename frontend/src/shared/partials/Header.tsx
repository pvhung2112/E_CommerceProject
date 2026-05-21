import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingCartFill } from "react-icons/ri";
import '../../shared/styles/partials/header.css'
function Header(){
return(
    <>
    <header className="header">
       <div className="container">
         <NavLink className="header-above" to="/">
             <div className="header-logo-image">
        <img src="../../public/logo512.png" alt="" />
            </div>
        </NavLink>
    <div className="header-menu">
        <ul className="header-menu-list">
            <li>
                <NavLink to="/">shop</NavLink>
            </li>
             <li>
                <NavLink to="/cellers/:id">cellers</NavLink>
            </li>
             <li>
                <NavLink to="/giude">giude</NavLink>
            </li>
            
        </ul>
    </div>
     <div className="header-actions">
        <ul className="header-actions-list">
            <li >
                <NavLink to="/best-cellers" className="item-seller">Best Sellers →</NavLink>
            </li>
             <li>
                <NavLink to="/search">
                <IoSearchOutline />
                </NavLink>
            </li>
             <li>
                <NavLink to="/account">
                <VscAccount />
                </NavLink>
            </li>
            <li>
                <NavLink to="/cart">
                <RiShoppingCartFill />
                </NavLink>
            </li>
            
        </ul>
    </div>
       </div>
    
    </header>
    </>
)
}
export default Header;
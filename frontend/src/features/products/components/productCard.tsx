import { productType } from "../type/product.type";
import { NavLink } from "react-router-dom";
type props = {
    item : productType
    key : string
}
function ProductCard({item, key} : props){
    return(
        <>
        <NavLink  to={`/product/${item.id}`} className="product-fillerCategory" key={key} >
                 <div className="product-image"> 
                    <img src="https://ugmonk.com/cdn/shop/files/card-bar-ls-108_800x.jpg?v=1773847418" alt="" />
                </div>
                <div className="product-main">
                    <div className="product-title">
                        <span className="product-name">
                          {item.name}
                        </span>
                        <span>
                          {item.create_at} </span>
                    </div>
                    <div className="product-price">
                        <strong className="product-pricenew">
                          {item.price.amount} {item.price.currency}
                        </strong>
                        <span className="product-priceold">12đ</span>
                    </div>
                </div>
                <div className="product-note">new</div>
               </NavLink>
        </>
    )
}
export default ProductCard;
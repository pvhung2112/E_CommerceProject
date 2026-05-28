import { productType } from "../type/product.type";
import { NavLink } from "react-router-dom";
// import StartFunction from "../../../shared/partials/star";
// import { FaUser } from "react-icons/fa";

type props = {
    item: productType
}
function ProductCard({ item }: props) {
    return (
        <>
            <NavLink to={`/product/${item.id}`} className="product-fillerCategory"  >
                <div className="product-image">
                    <img src={item.images?.[0]} alt="" />
                </div>
                <div className="product-main">
                    <div>
                        <span>đã bán : {item.sold}</span>
                    </div>
                    <div className="product-title">
                        <span className="product-name">
                            {item.title}
                        </span>

                    </div>
                    <div className="product-price">
                        <span className="product-pricenew">12đ</span>
                        <strong className="product-priceold">
                            {item.price.amount} {item.price.currency}
                        </strong>
                    </div>
                </div>
                {item.discountPercentage > 0 &&
                    <div className="product-note">-{item.discountPercentage}%</div>
                }
            </NavLink>
        </>
    )
}
export default ProductCard;
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/product.css"
type Product = {
  id: string;
  name: string;
  create_at: string;
  price: {
    amount: number;
    currency: string;
  };
};
function Product(){
  const [data,setdata] = useState<Product[]>([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      setdata(data.products);
    });
}, []);
  console.log(data);
return(
    <>
    <h2>the analog system</h2>
    <div className="products-card">
      <div className="container">
      {
        data && data.map((item)=>{
            return (
              <NavLink  to={`/product/${item.id}`} className="product-fillerCategory" key={item.id} >
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
            )
        })
      }
      </div>
    </div>
    </>
)
}
export default Product

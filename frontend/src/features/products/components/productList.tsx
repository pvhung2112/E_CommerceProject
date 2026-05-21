import { useEffect, useState } from "react";
import "../../../shared/styles/components/product.css"
import { productType } from "../type/product.type";
import ProductCard from "./productCard";
function ProductList(){
  const [data,setdata] = useState<productType[]>([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      setdata(data.data);
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
              <ProductCard key={item.id} item={item} />
            )
        })
      }
      </div>
    </div>
    </>
)
}
export default ProductList;

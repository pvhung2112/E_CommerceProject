
import "../../../shared/styles/components/product.css"
import { productType } from "../type/product.type";

import ProductCard from "./productCard";
type props = {
  data : productType[]
}
function ProductList({data} : props){
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

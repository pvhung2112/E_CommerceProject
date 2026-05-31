import Banner from "../../shared/partials/heroBaner";
import { productType } from "../../features/products/type/product.type";
import ProductList from "../../features/products/components/productList";
import { useEffect, useState } from "react";
function HomePage(){
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
          <Banner/>
          <ProductList  data={data}/>
        </>
    )
        
}
export default HomePage;
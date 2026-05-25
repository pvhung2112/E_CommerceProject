import ProductDetail from "../../features/products/components/productDetail";
import { useEffect, useState } from "react";
import { productType } from "../../features/products/type/product.type";
import { useParams } from "react-router-dom";
function ProductDetailPage() {
   const {id}= useParams();
    const [data,setdata] = useState<productType | null>(null);

    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/products/${id}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            setdata(data.data);
        })
    },[])
    console.log(data);
  return (
    <div style={{ minHeight: "80vh" }}>
   {data ?  <ProductDetail key={data?.id} data={data} /> : "đang load dữ liệu"}  
    </div>
  );
}

export default ProductDetailPage;

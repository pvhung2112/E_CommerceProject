import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
type Product = {
  id: string;
  name: string;
  create_at: string;
  price: {
    amount: number;
    currency: string;
  };
};
function  ProductDetail(){
    const {id}= useParams();
    const [data,setdata] = useState<Product | null>(null);

    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/product/${id}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            setdata(data.product);
        })
    },[])
    console.log(data);
    return(
        <>
       <div style={{ marginTop: "150px" }}>
             <div >productdetail</div>
        {data && <div>{data.name}</div> }
        </div>
       
        </>
    )
}
export default ProductDetail;
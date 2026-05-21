import { useEffect, useState } from "react";
import { productType } from "../type/product.type";
import { useParams } from "react-router-dom";

function  ProductDetail(){
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
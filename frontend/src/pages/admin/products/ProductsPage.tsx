import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import ProductTable from "../../../features/products/components/productTable";
import { productType } from "../../../features/products/type/product.type";

function Products() {
  const [data,setdata] = useState<productType[] | null>(null);
  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/products").then((res)=> res.json())
    .then((products)=>{
         setdata(products.data);
    })
  },[])
  return (
    <>
    <NavLink to="/admin/products/create">thêm product</NavLink>
    <ProductTable data={data}/>
    </>
  );
 }

export default Products;

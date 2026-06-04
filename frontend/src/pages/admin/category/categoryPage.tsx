import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CategoryTable, { categoryType } from "../../../features/categories/components/categoryTable";

function CategoryPage(){
    const [data,setdata] = useState<categoryType[] | null>(null);
    useEffect(()=>{
         fetch("http://localhost:5000/admin/api/v1/category").then((res)=>{
        return res.json()
        }).then((category)=>{
    console.log(category.data)
    setdata(category.data);
    })
    },[])
       
  
console.log("hihi");
    return (
        <>
        <NavLink to="/admin/category/create">thêm</NavLink>
        <CategoryTable data={data}/>
        </>
    )
}
export default CategoryPage;
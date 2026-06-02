import { useEffect, useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import { categoryType } from "../../../features/categories/components/categoryTable";
function CreateCategoryPage(){
    const navigate = useNavigate();
    const [data,setdata] = useState<categoryType[]| null>(null);
const handleSubmit =(e : SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(e);
    const form  = e.currentTarget;
    const formdata = new FormData(form);
    const data = Object.fromEntries(formdata); 
    console.log(data);
    fetch("http://localhost:5000/admin/api/v1/category/create",{
        method : "POST",
       headers : {
         "Content-Type": "application/json"
       },
       body : JSON.stringify(data)
    }).then((res)=>res.json()).then((data)=>{
        console.log(data);
        navigate(-1);
    })
   
}
useEffect(()=>{
          fetch("http://localhost:5000/admin/api/v1/category").then((res)=>{
        return res.json()
        }).then((category)=>{
    console.log(category.data)
    setdata(category.data);
        })
    },[])
 
   
    return (
        <>
<form onSubmit={handleSubmit}>
<label htmlFor="categoryName">tên</label>
<input type="text" name="title" id="categoryName" />
<label htmlFor="categoryDescription">mô tả</label>
<input type="text" name="description" id="categoryDescription" />

<select name="parentId" id="">
        {data && data.map((item) => {
    return (
        <option value={item.parentId}>
            {item.title}
        </option>
    );
})}

</select>
<div>
    <input type="radio" name="status" id="categoryActive"  value="active"/>
    <label htmlFor="categoryActive">hoạt động</label>
    <input type="radio" name="status" id="categoryInactive" value="inactive"/>
    <label htmlFor="categoryInactive">k hoạt động</label>
</div>
<button>thêm</button>
</form>
        </>
    )
}
export default CreateCategoryPage;
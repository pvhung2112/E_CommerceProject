import { useNavigate, useParams } from "react-router-dom";
import type { SubmitEvent } from "react";
import ProductForm from "../../../features/products/components/productForm";
import { objForm } from "../../../features/products/type/product.props";

function EditProductPage(){
    
    const navigate = useNavigate();
    const {id} = useParams();
    const handleSubmit = (e :  SubmitEvent<HTMLFormElement>)  =>{
         e.preventDefault();

        const form  = e.currentTarget;
        const formdata = new FormData(form);
       const data = Object.fromEntries(formdata); 
       console.log(data);
       fetch(`http://localhost:5000/admin/api/v1/products/edit/${id}`,{
        method : "PATCH",
         headers: {
        "Content-Type": "application/json"
        },
         body: JSON.stringify(data)
       }).then(
        (res)=>{ return res.json() }
       ).then((data)=>{
            console.log(data);
            navigate(-1);
       })
    }
    
    const formProps : objForm = {
            type : true,
            value : "sửa sản phẩm"
        }
return (
    <>

        <ProductForm type={formProps} eventForm={handleSubmit}/>


    </>
)
}
export default EditProductPage;
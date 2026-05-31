
import type { SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../../../features/products/components/productForm";
import { objForm } from "../../../features/products/type/product.props";

function CreateProduct() {
    const navigate = useNavigate();
    const handleSubmit = (e :  SubmitEvent<HTMLFormElement>)  =>{
         e.preventDefault();

        const form  = e.currentTarget;
        const formdata = new FormData(form);
       const data = Object.fromEntries(formdata); 
       console.log(data);
       fetch("http://localhost:5000/sellers/api/v1/products/create",{
        method : "POST",
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
        display : false,
        value : "thêm sản phẩm"
    }
    return (
        <>
        <ProductForm type={formProps} eventForm={handleSubmit}/>
        </>
    );
}

export default CreateProduct;
import { productType } from "../type/product.type";

type props = {
    data : productType | null
}
function  ProductDetail({data} : props){
   
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
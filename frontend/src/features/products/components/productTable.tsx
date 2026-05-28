import { NavLink } from "react-router-dom";
import { productType } from "../type/product.type";

type props = {
  data: productType[] | null
}
function ProductTable({ data }: props) {
  console.log(data);
  const handleClick = (id : string)=>{
    console.log(id)
    // fetch(`http://localhost:5000/sellers/api/v1/products/delete/${id}`,{
    //   method : "PATCH",
    
    // }
    // )
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Ngày tạo</th>
            <th>mô tả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.images[0]} alt="" />
                </td>
                <td>
                  {item.title}
                </td>
                <td>{item.price.amount} {item.price.currency}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>
                  <NavLink to={`/admin/products/edit/${item.id}`} >Sửa</NavLink>
                  <button onClick={()=>handleClick(item.id)}>Xóa</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </>
  )
}
export default ProductTable;
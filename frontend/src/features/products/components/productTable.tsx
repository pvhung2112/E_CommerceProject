import { NavLink } from "react-router-dom";
import { productType } from "../type/product.type";

type props = {
  data: productType[] | null
}
function ProductTable({ data }: props) {
  console.log(data);
  return (
    <>
       <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th>Ngày tạo</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item)=>{
            return(
              <tr>
                <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price.amount} {item.price.currency}</td>
            <td>{item.description}</td>
              <td>{item.create_at}</td>
            <td>
              <NavLink to={`/admin/products/edit/${item.id}`} className="btn-admin btn-sm">Sửa</NavLink>
              <button className="btn-admin btn-sm btn-danger">🗑️ Xóa</button>
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
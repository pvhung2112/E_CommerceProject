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
            <td>{item.name}</td>
            <td>{item.price.amount} {item.price.currency}</td>
            <td></td>
            <td>
              <button className="btn-admin btn-sm" style={{ backgroundColor: '#667eea', color: 'white', border: 'none', marginRight: '5px' }}>✏️ Sửa</button>
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
function ProductTable(){
return (
    <>
    <div className="table-container">
  <div className="table-header">
    <div className="table-header-title">Danh sách sản phẩm</div>
    <span style={{ color: '#999' }}>Tổng: 245 sản phẩm</span>
  </div>
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
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button className="btn-admin btn-sm" style={{ backgroundColor: '#667eea', color: 'white', border: 'none', marginRight: '5px' }}>✏️ Sửa</button>
          <button className="btn-admin btn-sm btn-danger">🗑️ Xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </>
)
}
export default ProductTable;
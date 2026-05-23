function Products() {
  const products = [
    { id: '#P001', name: 'Áo Thun Trắng', category: 'Quần Áo', price: '₫150.000', stock: 45, status: 'success' },
    { id: '#P002', name: 'Quần Jeans Nam', category: 'Quần Áo', price: '₫350.000', stock: 32, status: 'success' },
    { id: '#P003', name: 'Giày Thể Thao', category: 'Giày Dép', price: '₫580.000', stock: 18, status: 'pending' },
    { id: '#P004', name: 'Balo Du Lịch', category: 'Túi Xách', price: '₫450.000', stock: 8, status: 'cancelled' },
    { id: '#P005', name: 'Mũ Lưỡi Trai', category: 'Phụ Kiện', price: '₫95.000', stock: 67, status: 'success' },
  ];

  return (
    <div>
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="page-title">Quản lý Sản phẩm</h1>
            <p className="page-subtitle">Quản lý toàn bộ sản phẩm của cửa hàng</p>
          </div>
          <button className="btn-admin btn-primary">➕ Thêm sản phẩm mới</button>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <label>Danh mục</label>
          <select>
            <option>Tất cả danh mục</option>
            <option>Quần Áo</option>
            <option>Giày Dép</option>
            <option>Túi Xách</option>
            <option>Phụ Kiện</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Trạng thái</label>
          <select>
            <option>Tất cả</option>
            <option>Đang bán</option>
            <option>Hết hàng</option>
            <option>Ngừng bán</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Giá từ</label>
          <input type="number" placeholder="Min" />
        </div>
        <div className="filter-group">
          <label>Giá đến</label>
          <input type="number" placeholder="Max" />
        </div>
        <button className="btn-admin btn-secondary">🔍 Tìm kiếm</button>
      </div>

      {/* Products Table */}
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
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Số lượng tồn kho</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td style={{ fontWeight: '500' }}>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <span style={{ 
                    backgroundColor: product.stock > 20 ? '#d4edda' : '#fff3cd',
                    color: product.stock > 20 ? '#155724' : '#856404',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}>
                    {product.stock}
                  </span>
                </td>
                <td>
                  <span className={`table-status status-${product.status}`}>
                    {product.status === 'success' ? '✓ Hoạt động' : product.status === 'pending' ? '⏳ Chờ' : '✗ Ngừng'}
                  </span>
                </td>
                <td>
                  <button className="btn-admin btn-sm" style={{ backgroundColor: '#667eea', color: 'white', border: 'none', marginRight: '5px' }}>✏️ Sửa</button>
                  <button className="btn-admin btn-sm btn-danger">🗑️ Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button className="btn-admin btn-secondary">← Trước</button>
        <button className="btn-admin" style={{ backgroundColor: '#667eea', color: 'white', border: 'none' }}>1</button>
        <button className="btn-admin btn-secondary">2</button>
        <button className="btn-admin btn-secondary">3</button>
        <button className="btn-admin btn-secondary">Tiếp →</button>
      </div>
    </div>
  );
}

export default Products;

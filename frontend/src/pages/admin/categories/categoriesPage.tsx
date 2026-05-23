function Categories() {
  const categories = [
    { id: '#C001', name: 'Quần Áo', count: 156, status: 'success' },
    { id: '#C002', name: 'Giày Dép', count: 89, status: 'success' },
    { id: '#C003', name: 'Túi Xách', count: 45, status: 'success' },
    { id: '#C004', name: 'Phụ Kiện', count: 234, status: 'success' },
    { id: '#C005', name: 'Đồng Hồ', count: 12, status: 'pending' },
  ];

  return (
    <div>
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="page-title">Quản lý Danh mục</h1>
            <p className="page-subtitle">Tổ chức sản phẩm thành các danh mục</p>
          </div>
          <button className="btn-admin btn-primary">➕ Thêm danh mục</button>
        </div>
      </div>

      {/* Categories Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {categories.map((cat) => (
          <div key={cat.id} className="stat-card" style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <div className="stat-card-title">Danh mục</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0' }}>{cat.name}</h3>
                <p style={{ color: '#999', fontSize: '14px' }}>📦 {cat.count} sản phẩm</p>
              </div>
              <div style={{ fontSize: '32px' }}>📂</div>
            </div>
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
              <button className="btn-admin btn-sm" style={{ backgroundColor: '#667eea', color: 'white', border: 'none', flex: 1 }}>✏️ Sửa</button>
              <button className="btn-admin btn-sm btn-danger" style={{ flex: 1 }}>🗑️ Xóa</button>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Table */}
      <div className="table-container">
        <div className="table-header">
          <div className="table-header-title">Danh sách danh mục</div>
          <span style={{ color: '#999' }}>Tổng: {categories.length} danh mục</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên danh mục</th>
              <th>Số sản phẩm</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td style={{ fontWeight: '500' }}>{cat.name}</td>
                <td>{cat.count}</td>
                <td>
                  <span className={`table-status status-${cat.status}`}>
                    {cat.status === 'success' ? '✓ Hoạt động' : '⏳ Chờ'}
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
    </div>
  );
}

export default Categories;
